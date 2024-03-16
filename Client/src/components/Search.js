import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Search = () => {
  const navigate = useNavigate();
  const search = useRef(null)


  const formhandler = (e) => {
    e.preventDefault()
    navigate("/search/"+search.current.value);
  };

  return (
    <div className="">
      <form onSubmit={formhandler} className="flex">
        <input
          className="border w-full border-black my-2 py-2 rounded-lg px-2 text-sm"
          placeholder="Search for projects..."
          ref={search}
          type="text"
        ></input>
        <button>
          <img
            className="w-6 absolute -ms-8 -mt-3"
            alt="search"
            src="/asset/search.png"
          ></img>
        </button>
      </form>
    </div>
  );
};

export default Search;
