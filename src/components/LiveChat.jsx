import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from './slice/chatSlice';
import {generate,makeid} from './utility/helper';
function LiveChat() {

    const dispatch=useDispatch()
    const selector=useSelector(state=>state.chat.message)
    const [comment,setComment]=useState('')
    useEffect(()=>{

       let timer= setInterval(() => {
            dispatch(addMessages({
                name:generate(),
                message:makeid(15)
            }))
        },2000);

        return ()=>{
            clearInterval(timer)
        }
    },[])

 const handleClick=(e)=>{
    e.preventDefault()
    dispatch(addMessages({
        name:"Kuldeep",
        message:comment
        }))
    setComment('')
 }
    return (
        <>
        <div className=' h-[615px] w-[16rem] border border-black rounded-lg flex-col-reverse'>
            
            <div className='w-500px border-b-[1.5px] border-black'>Top Chat</div>

            {
                selector.map((item,index)=>(
                    <ChatMessage key={index} name={item.name} message={item.message} />
                    ))
            }
           
        </div>
        <div className='mx-2'>
            <form className='flex mt-2'>

            <input type="text" className='border-[1.5px] border-black 
            p-2 rounded-lg w-full h-[30px]' placeholder='Type a
            message' onChange={(e)=>setComment(e.target.value)} value={comment}/>

            <button onClick={handleClick} className='mx-4'>send</button>

            </form>
            </div>
        </>
    )
}
export default LiveChat;