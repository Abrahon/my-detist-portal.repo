import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {

    const {logOut} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();


    const handleSignOut = () =>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <p className="text-red-500">Something went to wrong</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button onClick={handleSignOut} className=''>Sign out</button>and log back in</h4>
        </div>
    );
};

export default DisplayError;