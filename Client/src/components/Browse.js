import React, { useEffect } from "react";
import Search from "./Search";
import TopDevelopers from "./TopDevelopers";
import ProjectsSection from "./ProjectsSection";
import ProjectsByDomain from "./ProjectsByDomain";
import Header from "./Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProjectData } from "../utils/Slices/projectSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const call = async () => {
      const dataList = await axios.get("/getdata");
      console.log(dataList);
      dispatch(addProjectData(dataList.data));
    };

    call();
  }, []);

  return (
    <div>
      <Header />
      <div className="px-4">
        <Search />
        <TopDevelopers />
        <ProjectsSection title={"Latest Project"} />
        <ProjectsByDomain />
        <ProjectsSection title={"Popular Project"} />
      </div>
    </div>
  );
};

export default Browse;
