import React, { useEffect } from "react";
import SubHeader from "./SubHeader";
import ProfileCard from "./ProfileCard";
import Domain from "./Domain";
import ProjectsSection from "./ProjectsSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeveloperProfile = () => {
  const {id} = useParams()
  console.log("developer id is "+id);
  useEffect(() => {
    const functionCall = async() => {
      const developerData = await axios.get('/profile'+id)
      console.log(developerData);
    }
    functionCall()
  },[])
  return (
    <div>
      <SubHeader title={"Profile"} />
      <div className="w-full bg-slate-50 mt-2 p-4 flex flex-col justify-center items-center">
        <img src="/asset/profile-picture.png" className="w-20"></img>
        <p className="font-semibold text-gray-700 mt-1">Alex Mathai</p>
        <p className="text-xs text-gray-600 py-1">Web Developer</p>
        <p className="text-xs text-gray-400 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div className="flex justify-center w-full gap-[1px] text-white font-semibold text-sm mt-3">
            <button className="bg-[#5429FF] w-2/5 py-3 rounded-s-md flex gap-2 justify-center">
                <img src="/asset/laptop.png" className="w-5"></img>
                <p>Projects</p>
            </button>
            <button className="bg-[#5429FF] w-2/5 py-3 rounded-e-md flex gap-2 justify-center items-center">
                <img src="/asset/eye-white.png" className="w-5"></img>
                <p>Views</p>
            </button>
        </div>
      </div>
      <div className="mt-2 px-3">
        <p>Tech stacks Known (5)</p>
        <Domain />
        <ProjectsSection title={"Projects"} />
      </div>
    </div>
  );
};

export default DeveloperProfile;
