import React, { useState } from 'react'
import Header from './Header';



const Login = () => {

  const [isSignInForm,setIsSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault(); //Prevent the form to be submitted
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen">
        <Header />
        <div >
          <img className='absolute w-full h-full object-cover object-center'
              src='https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_large.jpg'
              alt = "background"
          />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80'>
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className="p-4 my-4 w-full bg-slate-600 rounded-lg"/>}
            <input type='text' placeholder='Email Address or phone number' className="p-4 my-4 w-full bg-slate-600 rounded-lg"/>
            <input type='password' placeholder='Password' className="p-4 my-4 w-full bg-slate-600 rounded-lg"/>
            <button className='p-4 my-4 bg-red-600 w-full rounded-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <button className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Neflix? Sign Up Now":"Already Registered? Sign In Now"}</button>
        </form>
    </div>
  )
}

export default Login;