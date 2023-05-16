import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AllOrder from './AllOrder';
import { getCountryCallingCode } from 'react-phone-number-input';
import { useState } from 'react';
import { useEffect } from 'react';

const AllOrders = () => {
    const [newOrders, setOrders] = useState()
    // console.log(AllOrdersList);
    const AllOrdersList = useLoaderData()

    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => res.json())
            .then(output => setOrders(output))
    }, [AllOrdersList])

    const refresh = () => {

    }
    // useEffect(() => {
    //     setOrders(AllOrdersList)

    // }, [])

    const handleDeleteService = (id) => {
        fetch(`http://localhost:8000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(output => {
                // setOrders(AllOrdersList)
                console.log(output)
                toast.success("Order Cancel Successfully!!")
                if (output.deletedCount > 0) {
                    alert("deleted successfully!!")
                    const remaining = AllOrdersList.filter(odr => odr._id !== id);
                    setOrders(remaining)
                }
            })
        console.log(id);
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
                        AllOrdersList.map(orderList => <AllOrder
                            key={orderList._id}
                            orderList={orderList}
                            handleDeleteService={handleDeleteService}

                        ></AllOrder>)
                    }


                </table>
            </div>
        </div>
    );
};

export default AllOrders;