import React from 'react';
import expartTeam from "../../../assets/icons/group.svg"
import Guranty100 from "../../../assets/icons/check.svg"
import suport24 from "../../../assets/icons/person.svg"
import bestEquipment from "../../../assets/icons/Wrench.svg"
import timelyDelivry from "../../../assets/icons/deliveryt.svg"
import timeConsious from "../../../assets/icons/Group 38729.svg"


const Testimonials = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>

                <h4 className='text-orange-600 text-2xl font-bold'>Testimonilas</h4>
                <h1 className='text-4xl font-bold my-2'>What Customer Says </h1>

                <p className='my-4 max-w-2xl mx-auto'>Our Customer very much satisfiec about our service and we are very glad to be with them and can be more productive by getting much suggestion from them.. </p>
            </div>

            <div className="carousel w-full">
                <div id="testimonial_1" className="carousel-item relative w-1/2">
                    <img src={expartTeam} className="w-full" />
                    <img src={timelyDelivry} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#testimonial_4" className="btn btn-circle">❮</a>
                        <a href="#testimonial_2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="testimonial_2" className="carousel-item relative w-1/2">
                    <img src={expartTeam} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#testimonial_1" className="btn btn-circle">❮</a>
                        <a href="#testimonial_3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="testimonial_3" className="carousel-item relative w-1/2">
                    <img src={expartTeam} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#testimonial_2" className="btn btn-circle">❮</a>
                        <a href="#testimonial_4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="testimonial_4" className="carousel-item relative w-full">
                    <img src={expartTeam} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#testimonial_3" className="btn btn-circle">❮</a>
                        <a href="#testimonial_1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>





            {/* 
            <div className='flex justify-center my-6'>
                <button className='btn btn-outline btn-error'> MORE Prudouct</button>
            </div> */}
        </div >
    );
};

export default Testimonials;