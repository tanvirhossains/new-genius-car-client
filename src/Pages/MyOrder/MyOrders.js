import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyOrder from './MyOrder';
import { toast } from 'react-hot-toast';

const MyOrders = () => {
    const myOrdersList = useLoaderData()
    console.log(myOrdersList);

    const handleDeleteService = (id) => {


        fetch(`http://localhost:8000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(output => {
                console.log(output);
                toast.success("Order Cancel Successfully!!")
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
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>

                    {
                        myOrdersList.map(orderList => <MyOrder
                            key={orderList._id}
                            orderList={orderList}
                            handleDeleteService={handleDeleteService}

                        ></MyOrder>)
                    }

                    {/* <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                 
                     
                    </tbody> */}


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