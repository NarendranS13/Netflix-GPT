import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
    {
      showGptSearch ? <GptSearch /> : 
      <>      
      <MainContainer />
      <SecondaryContainer />
      </>
    }
    </div>
  )
}

export default Browse;