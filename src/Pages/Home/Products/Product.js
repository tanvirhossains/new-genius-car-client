import React from 'react';
import { IconName, AiOutlineArrowRight, AiFillStar, HiStar } from "react-icons/ai";






const Product = ({ ourService }) => {
    return (
        <div className="card glass p-5 ">
            <figure><img className='border rounded' src={ourService.img} alt="car!" /></figure>
            {/* <div className="card-body"> */}

            <div className=" font-bold text-center">
                <p className='text-orange-600 my-2 flex justify-center'>
                    <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </p>
                <h2 className=" text-2xl font-serif my-2">{ourService.serviceName}</h2>
                <p className=''>Price: ${ourService.price}.00</p>

            </div>

           
        </div>
    );
};

export default Product;