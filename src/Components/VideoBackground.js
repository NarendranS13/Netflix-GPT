import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';



const VideoBackground = ({movieid}) => {
     
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    // console.log("Key for the trailer Video "+trailerVideo?.key);
    useMovieTrailer(movieid);

  return (
    <div className='w-screen'>
        <iframe 
                className='w-screen aspect-video'
                // src={"https://www.youtube.com/embed/XeDbyVODQ5M?si="+trailerVideo?.key+"?&autoplay=1&mute=1"}
                src = {"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"}
    
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
        >
        </iframe>
    </div>
  )
};

export default VideoBackground;