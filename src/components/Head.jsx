import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openNav } from './slice/navSlice';
import { SUGGESTION } from './utility/constants';
import { Link } from 'react-router-dom';
import { caches } from './slice/searchSlice';


function Head() {
    const dispatch=useDispatch()
    const searchCache=useSelector((store)=>store.search)
    const [searchQuery,setSearchQuery]=useState('')
     const [suggestions, setSuggestions] = useState([])
     const [showSuggestions,setShowSuggestions]=useState(false)
    const handleToggle=()=>{
        dispatch(openNav())
    }
    useEffect(()=>{

        let timer=setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else {
                getSearchSuggestions()
            }
          

        }, 200);
      

        return ()=>{
             clearTimeout(timer)
        }
    },[searchQuery])

   
    const getSearchSuggestions=async()=>{
          const data = await fetch(SUGGESTION + searchQuery)
          const res= await data.json()
           setSuggestions(res[1])
          dispatch(caches({

             [searchQuery]:res[1]

          }))


      
    }
    return (
        <div className='flex my-4 h-14 shadow-lg w-full'>
            <div className='flex h-12 w-full pl-4'>
                <img onClick={handleToggle}
                className='w-[3%] cursor-pointer h-10 my-auto' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256" alt="menu" />
                <Link className='w-[7%]' to={'/'}><img  src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="logo" /></Link>
                <div className='mx-auto '>
                <input className='border-2 pr-80 rounded-l-full py-2 pl-4 ' value={searchQuery} type="search" placeholder="search" onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} />
                <button className=' rounded-r-full py-2 px-2' >🔍</button>
                {showSuggestions && <div className='absolute bg-white mx-2 px-4 w-[36%] shadow-xl rounded-xl  '>
                    <ul className=' mt-2 space-y-2'>

               { suggestions && suggestions.map((cur,index)=>{

                return (
                    <li key={index}>🔍 {cur}</li>
                )
                })}
                    </ul>
                </div>}
                    
                </div>
               
            </div>
         
            <div className=''>
                <img className='h-12 pb-2 pr-2' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="user" />
            </div>
        </div>
    )
}
export default Head;