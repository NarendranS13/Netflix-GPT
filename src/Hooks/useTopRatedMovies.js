import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../Utils/MoviesSlice";



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    useEffect(()=>{

      if(!topRatedMovies) getTopRatedMovies();
    },[])
  
    const getTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    };
};

export default useTopRatedMovies;