import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';



const VideoBackground = ({movieid}) => {
        // console.log("The movie id is "+ movieid);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieid);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <iframe 
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/XeDbyVODQ5M?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}
    
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
        </iframe>
    </div>
  )
};

export default VideoBackground;