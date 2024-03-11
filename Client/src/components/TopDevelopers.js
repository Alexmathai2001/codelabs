import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addDevelopersList } from "../utils/Slices/userSlice";

const TopDevelopers = () => {
  const dispatch = useDispatch();
  const [dev_list,setDev_list] = useState(null)

  useEffect(() => {
    const developers = async () => {
      const {data} = await axios.get("/getDevelopersList");
      console.log(data);
      setDev_list(data)
      dispatch(addDevelopersList(data));
    };
    developers();
  }, []);
  return (
    <div className="my-1">
      <p className="text-sm">Top Developers</p>
      <div className="py-2 flex gap-5">
        {dev_list?.map((developer,index) => (
            <Link key={index} to={"/developerProfile"} className="w-12 flex flex-col items-center">
            <img
              className="w-[3rem]"
              src="/asset/profile-user.png"
              alt="profile-user"
            ></img>
            <p className="text-xs mt-2 truncate capitalize">{developer.dev_name}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default TopDevelopers;
