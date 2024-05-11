# Netflix GPT
We are going to build an Netflix Clone App with following functionality.
1. Authentication - Log In / Log Off (Firebase)
2. Protected Routes
3. Forms
4. ChatGPT API integration
5. UI using Tailwind CSS

# Setting up the App
1. Used npx create-react-app
2. Installed Tailwind and configured the files.

# General App Structure
- Login/Sign Up Page
    - Sign In/Sign Up Form
    - Redirect to Browse Page
- Browse Page (after authentication)
    - Header (Nav bar area)
    - Main Movie
        - Trailer in Background
        - Title,description and Play Button.
        -Movie Suggestions
            -MovieLists * n (Lot of list)
- Netflix GPT.
    - Search Bar
    - Movie Suggestions

# Building the Forms
1. Setting up the Sign In/Sign Up Form
2. Used a simple toggle function to switch between Sign In/Sign Up Form.
3. Form Validation is conducted.

# Authentication

1. To build an Authentication. We need an Back end.
2. For that we are using Firebase.
3. Or we can use Node.js.
4. Open Firebase - Create project. Project Name = Netflix-gpt and id:netflix-gpt-f773e
5. Select the web app.

# Firebase Setup to Deploy
1. firebase login
2. firebase init, configure the deployment setting.
3. npm build
4. firebase deploy.
5. Firebase will provide the Hosting URL.

# Create Sign Up User Account
1. Used createUserWithEmailAndPassword functin firebase/Auth
2. Validated the Process via logging the success and error message
3. Checked the same in Firebase.

# Create Sign In User Account
1. Used signInWithEmailAndPassword functin firebase/Auth
2. Validated the Process via logging the success and error message

# Create the Redux Store to maintain the State of User across the App.
1. Created redux store with userSlice.

# To hold the User State and to allow navigate to Browse section.
1. Firebase - onAuthStateChanged.
2. This will hold the state across webpages.
3. If user is true. Then we can extract the Username, email, Photo etc.
4. Dispatch this information to the Redux store

# Update the sign up with Dispatch.
1. To fetch all the information for an newly registered users. 
2. Use an dispatch.
3. Redirect to Browse page. 

# Create Log out button.
1. Use signOut from Firebase auth.
2. Navigate the user to Sign/Sign up page.

# Bug Fixed
1. Fixed the issue where non user can access the browse section
2. Fixed where the user can access the login section
3. Moving the onAuthStateChanged to Header component.

# Unsubscribed to the OnAuthStateChanged Callback
1. To avoid unnecessary callback to onAuthStateChanged.

# Add Code Hygiene
1. Move all the hard coded values into the Constanst file.

# Registerd for TMDB
1. Registered my App in the TMDB.
2. Get that Access Token.
3. Retrieved the Movies list using the given API call.

# UI Structure in Browse Page
1.Main Container
    - Video Background
    - VideoTitle
2.SecondaryContainer
    - Movielist * n
        - cards * n

# Main Container
1. Created two Components. 
2. Video Title and Video Background.
3. Created an redux store to fetch the details of Movies via MovieSlice.
4. Populated the data in the Video Title to showcase the Video Title and Overview.
5. Created the Video Background component.
6. Fetched the Video Trailer using movieId and used to fetch the Youtube Key.
7. Embedded the Video in the Background using autoplay=1 and mute=1
8. Designed the UI using the Tailwind CSS Framework.

# Secondary Container.
1. General Structure.
            {/* 
                Movie List - Popular
                    - Horizontal Cards
                Movie List - Trending
                    - Horizontal Cards
                Movie List - Genre
                    - Horizontal Cards
                Movie List - Language.
                    - Horizontal Cards
            
            */}

# Secondary Container
1. Required 3 custom Hooks to fetch nowPlayingMovies, Popular movies and top rated movies
2. Created the Movielist using Map method
3. Movie Card - will showcase the images with horizontal scrolling.
4. Hidden the Scrolling using Horizontal scoll hidden package.


# Integration of Chat GPT API

1. We will create the GPT Search Component
2. Add them in the Header using an Button.
3. Added two components.
3a. GPT Search Page
3b. GPT Search Bar
4. Added Multi Language Feature in the App.
5. Integrate GPT API 
6. Using GPT API we fertched the movieNames and saved in redux store with same name.
7. The fetched names will be passed to an TMDB API called SearchMovieTMDB in gptSearchBar.
8. It will return a array of promises.
9. We will await for the promise and load them to redux store movieNames and movieResults.
10. We are reusing the movielist and movie card by passing the movieNames as title and movieResults as movies.
11. Add an .env file to hide the critical secret key. .env should be declared in the root folder.

# Memorization 

1. To avoid unwanted api calls.
2. We have the data already and we need to persist them.
3. Simply use the useselector to fetch the state.
4. Use an if condition in useEffect if(!getNowPlayingMovies) calltheapi

