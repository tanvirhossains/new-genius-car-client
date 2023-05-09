import React, { useEffect, useState } from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import BannerItem from './BannerItem';

const homeBanner = [
    {
        id: 1,
        currentImg: banner1,
        previous: 6,
        next: 2,

    },
    {
        id: 2,
        currentImg: banner2,
        previous: 1,
        next: 3,
    },
    {
        id: 3,
        currentImg: banner3,
        previous: 2,
        next: 4,
    },
    {
        id: 4,
        currentImg: banner4,
        previous: 3,
        next: 5,
    },
    {
        id: 5,
        currentImg: banner5,
        previous: 4,
        next: 6,
    },
    {
        id: 6,
        currentImg: banner6,
        previous: 5,
        next: 1,
    },
]


const Banners = () => {

    return (
        <div className="carousel w-full my-10">
            {
                homeBanner.map(banner => <BannerItem
                    key={banner.id}
                    banner={banner}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banners;