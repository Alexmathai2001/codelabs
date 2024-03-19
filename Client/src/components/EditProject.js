import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { techLibrary } from "../utils/techLibrary";

const EditProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    livelink: "",
    features: "",
    description: "",
    tech_used: [],
    database: "",
    screenshots: "",
    coverPhoto: "",
    repoLink: "",
  });

  const [value, setValue] = useState("");
  const [imageArray, setImageArray] = useState("");
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const tempImageArray = [];
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedStack = event.target.value;
    if (
      selectedStack !== "" &&
      !selectedTechStacks.includes(event.target.value)
    ) {
      setSelectedTechStacks((prevTechStacks) => [
        ...prevTechStacks,
        selectedStack,
      ]);

      console.log(selectedTechStacks);
    }
  };

  const handleCoverPhoto = (event) => {
    const coverPhotoFile = event.target.files[0]; // Get the first file

    if (coverPhotoFile instanceof Blob) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === FileReader.DONE) {
          setImageArray([reader.result]); // Set the image array with the cover photo data
          setFormData({ ...formData, coverPhoto: reader.result }); // Set formData with the cover photo data
        }
      };

      // Read the cover photo file
      reader.readAsDataURL(coverPhotoFile);
    } else {
      console.error("Invalid file:", coverPhotoFile);
    }
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          tempImageArray.push(reader.result);
          if (tempImageArray.length === files.length) {
            setImageArray(tempImageArray);
            setFormData({ ...formData, screenshots: tempImageArray });
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const handleFeatureChange = (content) => {
    setValue(content);
    setFormData({ ...formData, features: content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postdata = { ...formData, tech_used: selectedTechStacks };
      console.log(postdata)
      const response = await axios.post("/editproject", postdata);
      navigate("/");
      console.log(response); // Check response data for debugging
      if (response.data.result == "success") {
        console.log("success");
      } else {
        console.log("failure");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const { id } = useParams();

  const [projectinfo, setProjectinfo] = useState([]);

  useEffect(() => {
    const call = async () => {
      const { data } = await axios.get("/geteditprojectinfo/" + id);
      const projectData = data[0];
      console.log(projectData)
      setFormData({
        ...formData,
        project_id : projectData.project_id,
        title: projectData?.title,
        category: projectData?.category,
        livelink: projectData?.live_link,
        features: projectData?.features,
        description: projectData?.overview,
        tech_used: projectData?.tech_used,
        database: projectData?.db_used,
        screenshots: projectData?.screenshots,
        coverPhoto: projectData?.thumbnail,
        repoLink: projectData?.repoLink,
      });
    };
    call();
  }, []);

  return (
    <div>
      <SubHeader title={"Edit Project"} />
      <div className="py-2 px-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            required
            name="title"
            placeholder="Eg : E-rental WebApp"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            required
            placeholder="Eg : Full stack"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Live link</label>
          <input
            type="text"
            name="livelink"
            value={formData.livelink}
            placeholder="Eg : www.sample.com"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Repo link</label>
          <input
            type="text"
            name="repoLink"
            
            placeholder="Eg : www.sample.com"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Overview</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={6}
            placeholder="Enter small description about your project..."
            className="border-[1px] border-gray-400 rounded-md p-3 w-full"
          ></textarea>
          
          <label>Features</label>
          <div>
            <ReactQuill
              className=""
              onChange={handleFeatureChange}
              value={formData.features}
            />
          </div>
          <label>Database Used</label>
          <input
            type="text"
            required
            value={formData.database}
            name="database"
            onChange={handleChange}
            placeholder="Eg : MongoDB , NoSQL"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>
          <button
            type="submit"
            className="mt-2 w-full py-3 bg-[#5429FF] text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
