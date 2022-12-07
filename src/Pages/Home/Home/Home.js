import React from 'react';
import DentalCare from '../../ServicesCards/DentalCare';
import ServicesCards from '../../ServicesCards/ServicesCards';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <ServicesCards></ServicesCards>
           <DentalCare></DentalCare>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;