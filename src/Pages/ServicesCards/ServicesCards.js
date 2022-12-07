import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';


const ServicesCards = () => {
    const serviceData = [
        {
            id:1,
            name:"Fluoride Treatment",
            img:fluoride,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id:2,
            name:"Cavity Filling",
            img:cavity,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        },
        {
            id:3,
            name:"Teeth Whitening",
            img:whitening,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        }
    ]


    return (
        <div className='grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 drop-shadow-2xl'>
            {
                serviceData.map(service=><ServicesCard
                key={service.id}
                service={service}
                ></ServicesCard>)
            }
        </div>
   
    );
};

export default ServicesCards;