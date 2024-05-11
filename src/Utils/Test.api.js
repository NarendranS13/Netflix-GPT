
import { API_OPTIONS } from "./Constants"

const url = "https://api.themoviedb.org/3/search/movie?query=Paranormal%20Activitya&include_adult=false&language=en-US&page=1";

const testMovie = () => {
    fetch(url, API_OPTIONS)
        .then(response => {
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse response JSON
            return response.json();
        })
        .then(data => {
            // console.log("testmovie data", data); // Log the response data
        })
        .catch(error => {
            // console.error("Error fetching movie data:", error);
        });
};

export default testMovie;
