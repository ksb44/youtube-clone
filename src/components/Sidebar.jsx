import React from 'react';
import { useSelector } from 'react-redux';
function Sidebar() {
    const selector=useSelector(state=>state.app.navOpen)

    if(!selector) return null
    return (
        <>
     <div className='mt-1 p-4 shadow-2xl '>
            

            <h1 className='font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
        </>
    )
}
export default Sidebar;