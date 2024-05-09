import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {

    return (
    <div className='px-6 text-white'>
        <h1 className='text-3xl font-semibold px-1 py-4'>{title}</h1>
        <div className='flex overflow-x-auto scrollbar-hide'>
        <div className="flex">
            {
                movies?.map(movie =>
                <MovieCard key={movie.id} posterPath={movie.poster_path} alt_title = {movie.original_title} />)
            }
        </div>
        </div>
        

    </div>
  )
};

export default MovieList;