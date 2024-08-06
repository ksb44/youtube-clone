import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from './slice/videoSlice';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { YOUTUBE_API } from './utility/constants';

function VideoContainer() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.video.videos);

    useEffect(() => {
        const fetchAndSaveVideos = async () => {
            const storedVideos = localStorage.getItem('videos');
            
            if (storedVideos) {
                try {
                    const parsedVideos = JSON.parse(storedVideos);
                    dispatch(addVideos(parsedVideos));
                } catch (error) {
                    console.error('Failed to parse videos from localStorage:', error);
                    localStorage.removeItem('videos');
                    await fetchAndStoreVideos();
                }
            } else {
                await fetchAndStoreVideos();
            }
        };

        fetchAndSaveVideos();
    }, [dispatch]);

    const fetchAndStoreVideos = async () => {
        try {
            const response = await fetch(YOUTUBE_API);
            const data = await response.json();
            const videosWithId = data.items.filter(video => video.id && video.id.videoId);
            localStorage.setItem('videos', JSON.stringify(videosWithId));
            dispatch(addVideos(videosWithId));
        } catch (error) {
            console.error('Failed to fetch videos:', error);
        }
    };

    const filteredVideos = selector.filter(video => video.id && video.id.videoId);

    return (
        <div className='flex flex-wrap'>
            {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                    <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                        <VideoCard video={video} />
                    </Link>
                ))
            ) : (
                <p>No videos available</p>
            )}
        </div>
    );
}

export default VideoContainer;
