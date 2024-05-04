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