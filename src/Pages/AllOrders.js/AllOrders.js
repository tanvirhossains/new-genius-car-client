import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AllOrder from './AllOrder';
import { getCountryCallingCode } from 'react-phone-number-input';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllOrders = () => {
    const { user, logOut } = useContext(AuthContext)
    const [allorders, setAllOrders] = useState([])
    // console.log(AllOrdersList);

    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => res.json() )
            .then(output => {
                setAllOrders(output)
                console.log("load date", output);
            })
    }, [user])

    // approved a order
    const handlSelected = (statusValue, id) => {

        console.log(typeof (statusValue));
        const statusUpdate = {
            status: statusValue
        }
        console.log(statusUpdate);
        console.log(id);

        fetch(`http://localhost:8000/order/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(statusUpdate)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    const updatedOrders = allorders.find(odr => odr._id === id)
                    updatedOrders.status = statusValue
                    console.log(updatedOrders.status);
                    const remaining = allorders.filter(odr => odr._id !== id)
                    const newOrders = [...remaining, updatedOrders]
                    setAllOrders(newOrders)

                }
                console.log("line:27>", statusValue);
                console.log(result);
            })

    }


    // delete a order
    const handleDeleteService = (id) => {
        const value = window.confirm("are you Sure you wnat to delte!!!")
        console.log(value);
        if (value === true) {
            fetch(`http://localhost:8000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(output => {
                    // setOrders(AllOrdersList)
                    console.log(output)
                    toast.success("Order Cancel Successfully!!")
                    if (output.deletedCount > 0) {
                        const remaining = allorders.filter(odr => odr._id !== id);
                        setAllOrders(remaining)
                    }
                })
            console.log(id);
        }
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Service</th>
                            <th>price</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Objection </th>
                        </tr>
                    </thead>

                    {
                        allorders?.map(orderList => <AllOrder
                            key={orderList._id}
                            orderList={orderList}
                            handleDeleteService={handleDeleteService}
                            handlSelected={handlSelected}
                        ></AllOrder>)
                    }


                </table>
            </div>
        </div>
    );
};

export default AllOrders;