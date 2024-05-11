import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/MoviesSlice";



const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
    
    useEffect(()=>{
     if(!popularMovies) getPopularMovies();
    },[]);

};

export default usePopularMovies;