import React from 'react';
import expartTeam from "../../../assets/icons/group.svg"
import Guranty100 from "../../../assets/icons/check.svg"
import suport24 from "../../../assets/icons/person.svg"
import bestEquipment from "../../../assets/icons/Wrench.svg"
import timelyDelivry from "../../../assets/icons/deliveryt.svg"
import timeConsious from "../../../assets/icons/Group 38729.svg"


const CoreFeatures = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>

                <h4 className='text-orange-600 text-2xl font-bold'>Core Features</h4>
                <h1 className='text-4xl font-bold my-2'>Why Choose Us</h1>

                <p className='my-4 max-w-2xl mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>


                <div className='border rounded-lg   mx-auto px-8 py-7 '>
                    <img className='  mx-auto' src={expartTeam} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >Expart Team</p>
                </div>
                <div className='border rounded-lg   mx-auto px-8 py-7 bg-font'>
                    <img className='  mx-auto' src={timeConsious} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >Time Delivery</p>
                </div>
                <div className='border rounded-lg   mx-auto px-9 py-8'>
                    <img className='  mx-auto' src={suport24} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >24/7 Support </p>
                </div>
                <div className='border rounded-lg   mx-auto px-8 py-7'>
                    <img className='  mx-auto' src={bestEquipment} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >Best Eqipment</p>
                </div>
                <div className='border rounded-lg   mx-auto px-8 py-7'>
                    <img className='  mx-auto' src={Guranty100} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >100% Guranty</p>
                </div>
                <div className='border rounded-lg   mx-auto px-8 py-7'>
                    <img className='  mx-auto' src={timelyDelivry} alt="" />
                    <p className='text-xs font-bold mt-1 mx-auto' >Timely Delivery</p>
                </div>


            </div>
{/* 
            <div className='flex justify-center my-6'>
                <button className='btn btn-outline btn-error'> MORE Prudouct</button>
            </div> */}
        </div>
    );
};

export default CoreFeatures;