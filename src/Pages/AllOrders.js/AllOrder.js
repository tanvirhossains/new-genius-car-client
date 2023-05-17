import React, { useEffect, useState } from 'react';
import { AiFillCiCircle, AiFillCodeSandboxCircle } from 'react-icons/ai';

const AllOrder = ({ orderList, handleDeleteService, handlSelected }) => {

    const { serviceName, phone, message, price, date, time, imgUrl, _id, email, status } = orderList
    const [adminStatus, setAdminStatus] = useState('')





    useEffect(() => {

        setAdminStatus(status)
    }, [])
    // console.log(adminStatus);



    return (
        <tbody >

            < tr >
                {/* <th>
                    <button class="btn btn-circle btn-ghost" onClick={() => handleDeleteService(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th> */}
                {/* service */}
                <td>

                    <div className="flex items-center space-x-3">

                        <button class="btn btn-circle btn-ghost" onClick={() => handleDeleteService(_id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <p className="text-sm opacity-50">Color: Green</p>
                            <p className="text-sm opacity-50">Size: small</p>
                        </div>
                    </div>
                </td>

                {/* price  */}
                <td>
                    <h1 className='font-bold'>${price}.00</h1>
                </td>
                {/* User Email */}
                <td className='font-bold'>{email}</td>
                {/* date */}
                <td className='font-bold'>{date}</td>
                <th>
                    <select onChange={(e) => handlSelected(e.target.value, _id)} className={`select select-sm max-w-xs ${status === "Approved" ? " bg-green-500  " : "bg-font"} `} >

                        <option selected>{status}</option>
                        <option value={`${status === "Approved" ? "Pending" : "Approved"}`} className='bg-fon'>{status === "Approved" ? "Pending" : "Approved"}</option>

                    </select>

                </th>
            </tr >


        </tbody >
    );
};

export default AllOrder;