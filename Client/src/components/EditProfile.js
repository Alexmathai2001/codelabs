import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { id } = useParams();
  const [devinfo, setDevinfo] = useState();
  useEffect(() => {
    const call = async () => {
      console.log(id);
      const { data } = await axios.get("/deveditinfo/" + id);
      setDevinfo({
        dev_id : data[0]?.dev_id,
        dev_name : data[0]?.dev_name,
        dev_email : data[0]?.dev_email,
        dev_bio : data[0]?.dev_bio,
        dev_role : data[0]?.dev_role
      });
    };
    call();
    console.log(devinfo)
  }, []);

  const handlechange = (e) => {
    setDevinfo({...devinfo, [e.target.name]: e.target.value})
  }

  const handlesubmit = () => {
    
  }

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
        <form onSubmit={handlesubmit}>
          <label className="font-light my-2">Full Name</label>
          <input
          onChange={handlechange}
            type="text"
            name="dev_name"
            value={devinfo?.dev_name}
            className="w-full border-[1px] border-gray-400 rounded-md mb-2 py-2 px-2"
          ></input>
          <label className=" font-light">Headline</label>
          <input
            type="text"
            onChange={handlechange}
            name="dev_role"
            value={devinfo?.dev_role}
            placeholder="Eg : Web Developer"
            className="w-full border-[1px] border-gray-400 rounded-md mb-2 py-2 px-2"
          ></input>
          <label className=" font-light">Bio</label>
          <textarea
            rows={10}
            onChange={handlechange}
            name="dev_bio"
            value={devinfo?.dev_bio}
            placeholder="Eg : I'm a passionate web developer and designer with 7 years of experience crafting engaging and user-friendly websites. "
            className="border-[1px] border-gray-400 rounded-md w-full p-3"
          ></textarea>
          <button className="mt-16 w-full py-3 bg-[#5429FF] text-white font-semibold rounded-md">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
