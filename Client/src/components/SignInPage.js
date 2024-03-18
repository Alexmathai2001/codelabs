import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { checkUserSignIn } from "../utils/Slices/userSlice";
import axios from "axios";

const SignInPage = () => {

  const [errormsg, setErrormsg] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const email = useRef();
  const password = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in
        navigate('/')
        dispatch(checkUserSignIn())
        const user = userCredential.user;
        const response = axios.post('/login',{email:email.current.value})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormsg(errorMessage)
      });
  };

  return (
    <div className="px-3">
      <div className="flex justify-center w-full mt-36 mb-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/asset/logo.png" className="w-8"></img>
          <p className="font-bold text-gray-500">CodeLabs</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl mb-3">User Signin</p>
        <p className="text-gray-400 ">
          Please fill your details to access your account
        </p>
      </div>
      <form className="w-full my-5" onSubmit={handleSubmit}>
        <label className="mt-2 text-sm text-gray-500">E-mail</label>
        <input
          ref={email}
          className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]"
          type="email"
        ></input>
        <label className="mt-2 text-sm text-gray-500">Password</label>
        <input
          ref={password}
          className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]"
          type="Password"
        ></input>        
        <p className="w-full text-center text-sm text-red-500 font-semibold">{errormsg}</p>
        <button className="bg-[#5429FF] w-full rounded-lg text-white font-semibold py-2 mt-5">
          Sign in
        </button>
      </form>
      <p className="mt-8 text-sm text-center">
        New user?{" "}
        <Link to={"/signup"} className="text-[#5429FF] font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignInPage;
