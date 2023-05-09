import React from 'react';

const BannerItem = ({ banner }) => {
    
    return (
        <div id={`slide${banner.id}`} className="carousel-item relative w-full  bg-gradient-to-r from-gray-700 rounded-lg  ">
            <img src={banner.currentImg} className="w-full mix-blend-multiply rounded-lg  " />
            <div className='absolute lg:left-16 sm:left-3 top-1/4 lg:w-3/5  '>
                <h1 className='lg:text-7xl sm:text-3xl text-white font-bold'>Affordable <br /> Price For Car Servicing</h1>
                <p className='text-white text-2xl my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className=''>
                    <button className="btn sm:w-22 lg:w-44 me-4 bg-red-600 border-0">Discover More</button>
                    <button className="btn  btn-outline text-white text-1xl w-44 ">Letest project</button>
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left- right-5 bottom-0">
                <a href={`#slide${banner.previous}`} className="btn border-0 btn-circle bg-stone-400 bg-opacity-50 me-2">❮</a>
                <a href={`#slide${banner.next}`} className="btn border-0 btn-circle bg-red-600 mx-">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;