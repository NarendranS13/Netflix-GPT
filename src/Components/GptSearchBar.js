import React, {useRef} from 'react'
import lang from '../Utils/LanguageConstants';
import { useSelector,useDispatch } from 'react-redux';
import openai from '../Utils/OpenAi';
import { API_OPTIONS } from '../Utils/Constants';
import { addGptMovieResult } from '../Utils/gptSlice';


const GptSearchBar = () => {


  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();


  // Movie search using TMDB API using the text from Chat GPT.
  const searchMovieTMDB = async(movie) => {
    
    const encodedMovie = encodeURIComponent(movie)

    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ 
    encodedMovie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json()
  
    // console.log("Dear friend here is your json: " + json.results)
    return json.results;
  };


  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an Api call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " 
    + searchText.current.value + 
    ". only gives the name of 5 movies, comma separated like the example result given ahead. Example: KGF, RRR, Gadar, Maaveran, Manjummel Boys";



  try {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

  if (!gptResults.choices || !gptResults.choices.length) {
      throw new Error("No valid response from GPT API");
  }

    // console.log(gptResults.choices?.[0]?.message?.content);

    // "Andaz Apna Apna, Chupke Chupke, Padosan, Chhoti Si Baat, Gol Maal"
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",") || [];
    // ["Andaz Apna Apna", "Chupke Chupke", "Padosan", "Chhoti Si Baat", "Gol Maal"]

    // For each movie I will search TMDB API

    const promiseArray= gptMovies.map(movie => searchMovieTMDB(movie.trim()));
    // Result will be an array of Promises [promise1, promise2, promise3, promise4, promise5]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  } catch (error) {
    console.error("Error processing GPT results:", error);
  }
  };






  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-xl col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>


    </div>
  )
};

export default GptSearchBar;