import React from "react";
import SubHeader from "./SubHeader";

const EditProfile = () => {
  return (
    <div>
      <SubHeader title={"Edit Profile"} />
      <div className="px-4 py-4">
        <p className="font-light  text-gray-600">
          Provide details about yourself
        </p>
        <div className="py-4 flex items-center justify-evenly">
          <div>
            <p className="text-lg font-semibold">Basic Information</p>
            <p className="py-2">Profile photo</p>
            <p className="text-xs text-gray-500 font-light">
              Recommended size - 300 × 300
            </p>
            <div className="flex gap-3 mt-4">
              <button className="w-28 text-sm py-1 border-[1px] border-gray-400 rounded-md">
                Change
              </button>
              <button className="w-28 text-sm py-1 border-[1px] border-gray-400 text-red-500 rounded-md">
                Remove
              </button>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-gray-400">
            <img src="/asset/profile-user.png"></img>
          </div>
        </div>
        <form>
            <label className="font-light my-2">Full Name</label>
            <input type="text" className="w-full border-[1px] border-gray-400 rounded-md mb-2 py-2 px-2"></input>
            <label className=" font-light">Headline</label>
            <input type="text" placeholder="Eg : Web Developer" className="w-full border-[1px] border-gray-400 rounded-md mb-2 py-2 px-2"></input>
            <label className=" font-light">Bio</label>
            <textarea rows={10} placeholder="Eg : I'm a passionate web developer and designer with 7 years of experience crafting engaging and user-friendly websites. " className="border-[1px] border-gray-400 rounded-md w-full p-3"></textarea>
        <button className="mt-16 w-full py-3 bg-[#5429FF] text-white font-semibold rounded-md">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
