import React from "react";

const SignUpPage = () => {
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
      <form className="w-full my-5">
        <label className=" text-sm text-gray-500">Full Name</label>
        <input className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]" type="text" ></input>
        <label className="mt-2 text-sm text-gray-500">E-mail</label>
        <input className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]" type="email"></input>
        <label className="mt-2 text-sm text-gray-500">Password</label>
        <input className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]" type="Password"></input>
        <button className="bg-[#5429FF] w-full rounded-lg text-white font-semibold py-2 mt-5">Signup</button>
      </form>
      <p className="mt-8 text-sm text-center">Already have an account? <a href="/" className="text-[#5429FF] font-semibold">Sign in</a></p>
    </div>
  );
};

export default SignUpPage;
