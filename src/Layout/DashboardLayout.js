import React, { useContext } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Loading from '../Pages/Shared/Loading/Loading';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const navigate = useNavigation()
    if(navigate.state === 'loading'){
        return <Loading></Loading>
    }
    
    console.log(navigate)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                   <Outlet></Outlet>
                   
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                       
                        <li><Link to='/dashboard'>My Appointment</Link></li>


                        {
                            isAdmin && <>
                           <li><Link to='/dashboard/allusers'>All users</Link></li>
                           <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
                           <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>

                            </>


                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;