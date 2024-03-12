import React from "react";

const SubHeader = ({ title }) => {
  function backButton() {
        window.history.back();
  }
  return (
    <div className="flex justify-between px-4 py-2 h-14 items-center bg-r[F5F5F5] border border-b-2">
      <div className="flex">
        <button onClick={backButton}>
          <img className="w-6" alt="logo" src="/asset/next.png"></img>
        </button>
        <p className="ms-3 font-semibold text-gray-500 capitalize">{title}</p>
      </div>
    </div>
  );
};

export default SubHeader;
