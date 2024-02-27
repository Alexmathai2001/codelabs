import React from "react";

const ForgotPassword = () => {
  return (
    <div className="px-5">
      <div className="flex justify-center w-full mt-36 mb-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/asset/logo.png" className="w-8"></img>
          <p className="font-bold text-gray-500">CodeLabs</p>
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl mb-3">Forgot Password?</p>
        <p className="text-gray-400 ">
          Don't worry, we got you covered
        </p>
      </div>
      <form className="mt-5">
        <label className="mt-2 text-sm text-gray-500">Enter your registered email address</label>
        <input className="w-full py-2 rounded-lg px-2 border-gray-300 border-[1px]" type="email"></input>
        <button className="bg-[#5429FF] w-full rounded-lg text-white font-semibold py-2 mt-5">Continue</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
