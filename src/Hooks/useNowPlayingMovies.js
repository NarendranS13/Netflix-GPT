import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/MoviesSlice";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
      getNowPlayingMovies();
    },[])
  
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
};

export default useNowPlayingMovies;