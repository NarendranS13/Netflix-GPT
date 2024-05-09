import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import {BG_URL} from '../Utils/Constants'


const GptSearch = () => {
  return (
    <div>
          <img className='absolute w-full h-full object-cover object-center -z-10'
              src={BG_URL}
              alt = "background"
          />
      <GptSearchBar />
      <GptMovieSuggestions />
    
    </div>
  )
};

export default GptSearch;