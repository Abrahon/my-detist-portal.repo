import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';





const AppointmentBanner = ({selectedDate,setSelectedDate}) => {



    return (
        <header>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6 '>
                        <DayPicker
                         mode='single'
                        selected={selectedDate}
                        onSelect={(data)=>{
                            if(data){
                                setSelectedDate(data)
                            }
                        }}

                        />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;