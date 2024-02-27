import React from "react";
import SubHeader from "./SubHeader";
import RichTextEditor from "./RichTextEditor";

const AddProject = () => {
  return (
    <div>
      <SubHeader title={"Add Project"} />
      <div className="py-2 px-4">
        <form>
          <label>Title</label>
          <input
            type="text"
            placeholder="Eg : E-rental WebApp"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>
          <label>Category</label>
          <input
            type="text"
            placeholder="Eg : Full stack"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>
          <label>Live link</label>
          <input
            type="text"
            placeholder="Eg : www.sample.com"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>
          <label>Overview</label>
          <textarea
            rows={6}
            placeholder="Enter small description about your project..."
            className="border-[1px] border-gray-400 rounded-md p-3 w-full"
          ></textarea>
          <div className="flex justify-around my-3">
            <div class="relative">
              <input
                type="file"
                accept="image/*"
                multiple
                class="absolute inset-0 w-full h-full opacity-0"
                aria-hidden="true"
              ></input>
              <button
                type="button"
                className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload screenshots
              </button>
            </div>
            <div class="relative">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0"
                aria-hidden="true"
              ></input>
              <button
                type="button"
                class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload cover image
              </button>
            </div>
          </div>
          <label>Features</label>
          <RichTextEditor />
          <label>Frameworks/Libraries Used</label>
          <input
            type="text"
            placeholder="Eg : React , Mongoose"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>{" "}
          <label>Database Used</label>
          <input
            type="text"
            placeholder="Eg : MongoDB , NoSQL"
            className="py-2 px-2 w-full border-[1px] border-gray-400 rounded-md mb-2"
          ></input>
          <div class="relative my-3">
            <input
              type="file"
              accept=".zip"
              className="absolute inset-0 w-full h-full opacity-0"
              aria-hidden="true"
            />

            <button
              type="button"
              class="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Upload project zip
            </button>
          </div>
          <button className="mt-2 w-full py-3 bg-[#5429FF] text-white font-semibold rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
