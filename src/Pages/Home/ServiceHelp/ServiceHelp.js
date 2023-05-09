import React from 'react';
import { AiFillCalendar, AiFillRedditCircle, AiOutlineCalendar, AiOutlinePhone, AiTwotoneCalendar } from 'react-icons/ai';

const ServiceHelp = () => {
    return (
        <div className='bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10  my-8 rounded-lg '>

            
            <div className='flex text-white items-start'> 
                <h1 className='text-5xl mx-2 mt-1'><AiTwotoneCalendar/></h1>
                <div>
                    <p>We are open on monday </p>
                    <p className='text-2xl font-bold'>7:00 - 9:00 PM</p>
                </div>
            </div>
            <div className='flex text-white items-start'> 
                <h1 className='text-5xl mx-2 mt-1'><AiOutlinePhone/></h1>
                <div>
                    <p>Have a question? </p>
                    <p className='text-2xl font-bold'>+2546 251 2658</p>
                </div>
            </div>
            <div className='flex text-white items-start'> 
                <h1 className='text-5xl mx-2 mt-1'><AiFillRedditCircle/></h1>
                <div>
                    <p>Need a repair? our address</p>
                    <p className='text-2xl font-bold'>Liza Street, New York</p>
                </div>
            </div>
           
        </div>
    );
};

export default ServiceHelp;