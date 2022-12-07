import React from 'react';
import chair from '../../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="md:w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button className="btn btn-primary  bg-gradient-to-r from-purple-500 to-pink-500">Get Started</button>
    </div>
  </div>
  
</div>
    );
};

export default Banner;