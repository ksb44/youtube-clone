import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeNav } from './slice/navSlice';
import {  useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import LiveChat from './LiveChat';
function Watch() {
    const dispatch=useDispatch()
    const [searchParam]=useSearchParams()

    useEffect(()=>{
        dispatch(closeNav())

    },[])
    return (
        <>
        <div className=' flex'>
 <div  className=''>
            <iframe  className="" width="780" height="615"   src={`https://www.youtube.com/embed/${searchParam.get('v')}?si=9PyxzHVS7rzPJ6R4`}
 title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
 </div>
 <div className=' px-2'>
    <LiveChat/>
 </div>
        </div>
        <div className='w-full'>
        <Comments/>
        </div>
        </>
    )
}
export default Watch;