import React from 'react';

const BannerItem = ({ banner }) => {

    return (
        <div id={`slide${banner.id}`} className="carousel-item relative w-full  bg-gradient-to-r from-gray-700 rounded-lg  ">
            <img src={banner.currentImg} className="w-full mix-blend-multiply rounded-lg  " />
            {/* <div className='absolute lg:left-16 sm:left-3 top-1/4 lg:w-3/5  '> */}
            {/* <div className='absolute top-1/2 m-3 max-w-2xl'>
                <h1 className='lg:text-7xl sm:text-3xl text-white font-bold'>Affordable <br /> Price For Car Servicing</h1>
                <p className='text-white text-2xl my-6'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className=''>

                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline bg-font border-0 text-white me-6">Discover More</button>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white ">Letest Project</button>
                </div>
            </div> */}
            <div className="absolute flex justify-end transform -translate-y-1/2 sm:left-4 lg:left-24 top-1/4">
                <h1 className=' sm:text-2xl lg:text-6xl font-bold text-white  '>
                    Affordable <br />
                    Price for Car
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-3/5 sm:left-4 lg:left-24 top-1/2">
                <p className=' sm:text-sm lg:text-2xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>

            <div className="absolute flex justify-start w-2/5 sm:left-7 lg:left-24 top-3/4">
                {/* <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4"> */}

                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline bg-font border-0 text-white me-6">Discover More</button>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white ">Letest Project</button>
            </div>
            {/* <div className=''>

                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline bg-font border-0 text-white me-6">Discover More</button>
                <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline text-white ">Letest Project</button>
            </div> */}
            <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${banner.previous}`} className="btn border-0 btn-circle  bg-stone-400 bg-opacity-50 me-2">❮</a>
                <a href={`#slide${banner.next}`} className="btn border-0 btn-circle  bg-font mx-">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;