import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyOrder from './MyOrder';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useState } from 'react';

const MyOrders = () => {
    // const myOrdersList = useLoaderData()
    // console.log(myOrdersList);
    // console.log(myOrdersList.length);

    const { user, loading, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    // if (loading) {
    //     return <p>la</p>
    // }


    useEffect(() => {
        fetch(`http://localhost:8000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-car-token')}`,
            }
        })
            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut()
                // }
              return  res.json()
                console.log(res);
            })
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [user?.email])

    const handleDeleteService = (id) => {
        fetch(`http://localhost:8000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(output => {
                console.log(output);
                toast.success("Order Cancel Successfully!!")
                if (output.deletedCount > 0) {
                    window.confirm("Are You want to delete???????")
                    const remaining = orders?.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        console.log(id);
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
                {(orders.lengtn === undefined && orders.length === 0) &&
                    <div className='text-center  m-11 '>
                        <h1 className='text-3xl font-bold text-font'>You Have no Order yet!!</h1>
                        <h1 className='text-1xl font-bold '>Order Please!!!!!</h1>
                    </div>
                }
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Service</th>
                            <th>price</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {
                        orders.map(orderList => <MyOrder
                            key={orderList._id}
                            orderList={orderList}
                            handleDeleteService={handleDeleteService}
                        ></MyOrder>)
                    }

                    {/* table footer */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default MyOrders;