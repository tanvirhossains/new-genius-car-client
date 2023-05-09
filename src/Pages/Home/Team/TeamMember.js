import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, BsFacebook } from "react-icons/ai";



const TeamMember = ({ teamPersion }) => {
    return (
        <div className="card glass p-5 ">
            <figure><img className='border rounded' src={teamPersion.member} alt="car!" /></figure>
            {/* <div className="card-body"> */}

            <div className=" font-bold text-center">

                <h2 className=" text-2xl font-serif my-2">{teamPersion.name}</h2>
                <h2 className=" text-1xl font-bold my-2"> Expart IN :
                    <span className='text-orange-600 ms-1'>
                        {teamPersion.expart}
                    </span>
                </h2>
                <p className='flex justify-center text-3xl'>
                    <span className='text-blue-500'> <AiFillFacebook /> </span>
                    <span className='text-red-600'> <AiOutlineInstagram /> </span>
                    <span className='text-blue-600'> <AiOutlineTwitter /> </span>
                    <span className='text-blue-950'> <AiFillLinkedin /> </span>


                </p>
            </div>


        </div>
    );
};

export default TeamMember;