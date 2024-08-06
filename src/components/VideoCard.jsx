import React from 'react';
function VideoCard({video}) {
    const {snippet}=video
    const {channelTitle,title,thumbnails}=snippet
    return (
        <div className='flex m-3 mt-4 w-[80%]'>
           {thumbnails &&
           <div> <img className=' ' src={thumbnails.medium.url} alt="thumb" />
            <div className='flex flex-col mt-2 w-[80%]'>
                <h2 className='font-bold text-sm w-[230px]'>{title}</h2>
                <p className=''>{channelTitle}</p>
                </div>
        
            </div>}
        </div>
    
    )
}
export default VideoCard;