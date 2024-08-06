import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Body() {
    const navOpen = useSelector(state => state.app.navOpen);

    return (
        <div className=' grid gap-4 grid-cols-12'>
            {navOpen && (
                <div className={`w-64 col-span-${navOpen ? '2' : '0'}`}>
                    <Sidebar />
                </div>
            )}
   
            <div className={`mx-2 col-span-10`}>
         
                <Outlet />
            </div>
          

            
        </div>
    );
}

export default Body;
