import React, { useState } from "react";
import SubHeader from "./SubHeader";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { techLibrary } from "../utils/techLibrary";

const AddProject = () => {
  console.log(techLibrary);
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
      //setFormData({ ...formData, tech_used: selectedTechStacks});
      const postdata = { ...formData, tech_used: selectedTechStacks };
      const response = await axios.post("/addproject", postdata);
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

  return (
    <div>
      <SubHeader title={"Add Project"} />
      <div className="py-2 px-4">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Title</label>
          <input
            type="text"
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
            required
            placeholder="Eg : Full stack"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Live link</label>
          <input
            type="text"
            name="livelink"
            placeholder="Eg : www.sample.com"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Repo link</label>
          <input
            type="text"
            name="repoLink"
            required
            placeholder="Eg : www.sample.com"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
            onChange={handleChange}
          ></input>
          <label>Overview</label>
          <textarea
            name="description"
            required
            onChange={handleChange}
            rows={6}
            placeholder="Enter small description about your project..."
            className="border-[1px] border-gray-400 rounded-md p-3 w-full"
          ></textarea>
          <div className="flex justify-around my-3">
            <div className="relative">
              <input
                type="file"
                required
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="absolute inset-0 w-full h-full opacity-0"
                aria-hidden="true"
              ></input>
              <button
                type="button"
                className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload screenshots
              </button>
            </div>
            <div className="relative">
              <input
                type="file"
                required
                onChange={handleCoverPhoto}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0"
                aria-hidden="true"
              ></input>
              <button
                type="button"
                className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload cover image
              </button>
            </div>
          </div>
          <label>Features</label>
          <div>
            <ReactQuill
              className=""
              onChange={handleFeatureChange}
              value={value}
            />
          </div>
          <div className="my-2">
            <label>Tech-Stack Used</label>
            <select
              name="tech_used"
              onChange={handleSelectChange}
              className="block w-full bg-white py-2 border-2 border-gray-400"
            >
              <option value="" disabled>
                Select your Stacks
              </option>
              <option selected disabled>
                select
              </option>
              {techLibrary.map((data, index) => {
                return (
                  <option key={index} value={data.name}>
                    {data.name}
                  </option>
                );
              })}
            </select>

            <div className="selected-tech-stacks flex w-full flex-wrap gap-2">
              {selectedTechStacks.map((stack, index) => (
                <div
                  id={index}
                  class="flex bg-blue-600 my-2 rounded-full p-1 pl-3 w-max gap-2 h-max"
                >
                  <div>
                    <span class="text-white">{stack}</span>
                  </div>
                  <button
                    onClick={() => {
                      selectedTechStacks.splice(index, 1);
                      setSelectedTechStacks([...selectedTechStacks]);
                    }}
                    type="button"
                    id="new+button"
                    class=" text-white rounded-full h-6 w-6"
                  >
                    <span class="material-symbols-outlined text-white ">
                      close
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <label>Database Used</label>
          <input
            type="text"
            required
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

export default AddProject;
