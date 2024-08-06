import React from 'react';
function ChatMessage({name,message}) {
    return (
        <div className='flex items-center'>
            <img className='w-[10%]' src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="user" />
            <span className='font-bold mx-1 '>{name}</span>
            <span className='w-full'>{message}</span>
        </div>
    )
}
export default ChatMessage;