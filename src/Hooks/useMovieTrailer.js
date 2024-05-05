import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/MoviesSlice";
import { API_OPTIONS } from "../Utils/Constants";



const useMovieTrailer = (movieid) => {

    // console.log("In the custom hook the id is "+ movieid);
    const dispatch = useDispatch();

        //fetch Trailer for that video. (using Movie ID) && Updating the store with trailer Video data.
        const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            // console.log(json);
    
            const filterData = json.results.filter(video => video.type === "Trailer");
            const trailer = filterData.length ?filterData[0]: json.results[0];
            // console.log(trailer);
            dispatch(addTrailerVideo(trailer));
        };
    
        useEffect(()=>{
            getMovieVideos();
        },[])
};

export default useMovieTrailer;