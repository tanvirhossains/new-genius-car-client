import React from 'react';
import Header from '../Header/Header';
import Banners from '../Banner/Banners';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import ServiceHelp from '../ServiceHelp/ServiceHelp';
import Products from '../Products/Products';
import TeamMembers from '../Team/TeamMembers';
import CoreFeatures from '../CoreFeatures/CoreFeatures';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <About></About>

            <Services></Services>

            <ServiceHelp></ServiceHelp>
            <Products></Products>

            <TeamMembers></TeamMembers>

            <CoreFeatures></CoreFeatures>
            <Testimonials></Testimonials>




        </div>
    );
};

export default Home;