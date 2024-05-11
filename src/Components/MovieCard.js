import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants';

const MovieCard = ({posterPath,alt_title}) => {
  if(!posterPath) return;
  return (
    <div className="w-48 px-2">
       <img alt={alt_title}
            src={IMG_CDN_URL+posterPath} />


    </div>
  )
};

export default MovieCard;