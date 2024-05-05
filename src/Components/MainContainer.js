import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return;

    const mainMovie = movies[0];
    // This will throw an error to access the element since at first the redux state is null
    // console.log(mainMovie);

    const {original_title,overview,id} = mainMovie;
    // console.log(id);

  return (
    <div>
        <VideoTitle  title={original_title} overview = {overview}/>
        <VideoBackground movieid = {id} />


    </div>
  )
}

export default MainContainer;