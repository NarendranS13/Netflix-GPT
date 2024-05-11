import React,{useState} from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged} from 'firebase/auth';
import { addUser, removeUser } from '../Utils/UserSlice';
import { SUPPORTED_LANGUAGES, logo } from '../Utils/Constants';
import { toggleGptSearchView,removeGptMovieResult } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/ConfigSlice';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const[changeButtonName,setchangeButtonName] = useState(true);



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {         
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");

        }
      });

      // Unsubscribe when component Unmounts
      return () => unsubscribe();
},[]);


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }

const handleGptSearchClick = () => {
  // Toggle GPT Search
  dispatch(toggleGptSearchView());
  dispatch(removeGptMovieResult());
  // Change the button between ChatGPT Search and HomePage
  setchangeButtonName(!changeButtonName);
};

const handleLanguageChange = (e) => {
  //Toggle language
  dispatch(changeLanguage(e.target.value));
};

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row md:justify-between '>
     <img className='w-44 mx-auto md:mx-0'
          src = {logo}
          alt = 'logo'
      />
      { user && <div className='flex p-2 justify-between'>
        {!changeButtonName && <select className='m-2 p-2 bg-gray-900 text-white rounded-xl' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.indentifier} value={lang.identifier}>{lang.name}</option>)}
  
        </select>}
        <button className='py-2 px-4 mx-4 bg-purple-800 text-white rounded-xl'
        onClick={handleGptSearchClick}>{changeButtonName?'🔍GPT Search':'🏠Home'}</button>
        <div className='relative'>
        <img 
            className='hidden md:inline-block w-12 h-12 mt-1'
            // src= 'data:image/png;base64,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'
            src = {user.photoURL}
            alt = 'user-icon'
        />
        <button onClick = {handleSignOut} className='py-2 px-2 bg-gray-400 md:py-0.5 rounded-lg md:mx-2 font-semibold text-white md:hover:bg-red-700'>Sign Out</button>
        </div>
      </div>}
      
    </div>
  )
}

export default Header;