import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies);



    return (
    <div className=" bg-black">
        <div className="-mt-64 relative z-20">
            {movies.nowPlayingMovies && (
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            )}
            {movies.popularMovies && (
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            )}
            {movies.topRatedMovies && (
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            )}
            {/* <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Tamil Movies"} movies={movies.nowPlayingMovies}/> */}
        </div>
    </div> 
    );
};

export default SecondaryContainer;