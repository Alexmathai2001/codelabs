import React from "react";
import SubHeader from "./SubHeader";

const Myprofile = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <SubHeader title={"My Profile"} />
      <div className="w-full bg-slate-50 mt-2 p-4 flex flex-col justify-center items-center">
        <img src="/asset/profile-picture.png" className="w-20"></img>
        <p className="font-semibold text-gray-700 mt-1">Alex Mathai</p>
        <p className="text-xs text-gray-600 py-1">Web Developer</p>
        <button className="w-2/5 py-3 rounded-full bg-[#5429FF] text-white font-semibold mt-2 text-sm">
          Edit Profile
        </button>
      </div>
      <div>
        <div className=" bg-white m-5 p-5 rounded-lg ">
          <div className="flex gap-2 border-[1px] border-gray-300 p-3 rounded-lg my-2">
            <img src="/asset/project.png" className="w-6"></img>
            <p>My Projects</p>
          </div>
          <div className="flex gap-2 border-[1px] border-gray-300 p-3 rounded-lg my-2">
            <img src="/asset/contact.png" className="w-6"></img>
            <p>Contact Us</p>
          </div>
          <div className="flex gap-2 border-[1px] border-gray-300 p-3 rounded-lg my-2">
            <img src="/asset/setting.png" className="w-6"></img>
            <p>Settings</p>
          </div>
          <div className="flex gap-2 border-[1px] border-gray-300 p-3 rounded-lg my-2">
            <img src="/asset/privacy.png" className="w-6"></img>
            <p>Privacy & Policy</p>
          </div>
          <div className="flex gap-2 border-[1px] border-gray-300 p-3 rounded-lg my-2">
            <img src="/asset/logout.png" className="w-6"></img>
            <p className="text-red-500">Logout</p>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <p className="text-center text-sm font-light">Designed by <span className="font-bold text-[#5429FF]">Secure3</span></p>
      </div>
    </div>
  );
};

export default Myprofile;
