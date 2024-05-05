import React from 'react';
import playIcon from '../Assets/play.png';
import infoIcon from '../Assets/information.png';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div >
            <button className='bg-white text-black p-4 px-12 text-xl  rounded-md hover:bg-opacity-80'>
            <img src={playIcon} alt="Play Icon" className="w-6 h-6 mr-2 inline-block"/>
              Play
            </button>
            <button className='bg-white text-black mx-2 p-4 px-12 text-xl  rounded-md hover:bg-opacity-80'>
              More Info <img src={infoIcon} alt="Play Icon" className="w-5 h-5 inline-block align-middle"/>
            </button>
        </div>
    </div>
  )
};

export default VideoTitle;