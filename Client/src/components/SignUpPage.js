import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {

  const [errormsg,setErrormsg] = useState('')

  const fullname = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        fullName: fullname.current.value,
        email: email.current.value
      };

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(async (userCredential) => {
          // Signed up
          const user = userCredential.user;
          const response = await axios.post('/signup',formData)
          console.log(response);
          navigate('/signin')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorMessage)
          // ..
        });
    } catch (error) {
      console.log(error);
    }
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
        <p className="font-bold text-3xl mb-3">User Signup</p>
        <p className="text-gray-400 ">
          Please fill your details to create an account
        </p>
      </div>
      <form className="w-full my-5" onSubmit={handleSubmit}>
        <label className=" text-sm text-gray-500">Full Name</label>
        <input
          ref={fullname}
          className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]"
          type="text"
        ></input>
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
        <p className="w-full text-center pt-3 text-sm text-red-500 font-semibold capitalize">{errormsg}</p>
        <button className="bg-[#5429FF] w-full rounded-lg text-white font-semibold py-2 mt-3">
          Signup
        </button>
      </form>
      <p className="mt-8 text-sm text-center">
        Already have an account?{" "}
        <Link to={"/signin"} className="text-[#5429FF] font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
