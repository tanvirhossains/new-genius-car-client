import React from 'react';
import { IconName, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';



const Service = ({ ourService, handleServiceOrder }) => {

    const { _id, img, serviceName } = ourService



    return (
        <div className="card glass p-5 ">
            <figure><img className='border rounded' src={ourService.img} alt="car!" /></figure>
            {/* <div className="card-body"> */}
            <h2 className="card-title text-2xl font-serif my-2">{ourService.serviceName}</h2>

            <div className="flex justify-between text-red-500 font-bold">
                <p className=''>Price: ${ourService.price}.00</p>
                <Link to={`/checkout/${_id}`}>

                    <p ><AiOutlineArrowRight /> </p>
                </Link>
            </div>

            {/* </div> */}
        </div>
    );
};

export default Service;