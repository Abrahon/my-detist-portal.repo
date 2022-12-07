import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment,setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data : appointmentOption = [], refetch,isLoading} = useQuery({
    
        queryKey:['appointmentOption'],
        queryFn: async()=>{
            const res = await fetch(`https://doctors-portal-server-five-rust.vercel.app/appointmentOption?date=${date}`)
            const data = await res.json();
            return data
        }

    });
    if(isLoading){
        return <Loading></Loading>
    }

   console.log(appointmentOption)
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10'>
                {
                    appointmentOption.map(option=><AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}

                    ></AppointmentOption>)
                }
            </div>
           {
            treatment &&
             <BookingModal
             selectedDate = {selectedDate}
             treatment={treatment}
             setTreatment={setTreatment}
             refetch = {refetch}
             ></BookingModal>
           }
        </section>
    );
};

export default AvailableAppointment;