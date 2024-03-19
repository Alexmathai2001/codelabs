import React from "react";
import { calcDate } from "../utils/dateDifference";
import { Link, useNavigate } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <Link
      to={`/description/${data?.project_id}`}
      className="flex border-gray-200 border-[1px] p-2 mt-1"
    >
      <div>
        <img
          className="bg-cover w-40 aspect-video border-[1px] border-gray-500"
          src={data?.thumbnail}
          alt="project-screenshot"
        ></img>
      </div>
      <div className="ms-2 flex flex-col justify-evenly w-full">
        <p className="font-medium text-xs text-blue-500 capitalize">
          {data?.category}
        </p>
        <p className="text-sm font-medium capitalize">{data?.title}</p>
        <p className="text-xs text-gray-500 capitalize">{data?.publisher}</p>
        <div className="flex justify-between w-full">
          <div className="flex gap-2 w-2/3">
            <div>
              <div className="flex gap-1">
                <img className="w-4 h-4" src="/asset/eye.png"></img>
                <p className="text-xs text-gray-400">{data?.views} k</p>
              </div>
            </div>
            <div className="flex gap-1">
              <img className="w-4 h-4" src="/asset/download-button.png"></img>
              <p className="text-xs text-gray-400">{data?.downloads} k</p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex gap-1">
              <img className="w-4 h-4" src="/asset/clock.png"></img>
              <p className="text-xs text-gray-400">
                {calcDate(data?.published_date).result || "New"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

export const MyProjectCard = (Card) => {

  const navigate = useNavigate()

  const onClickHandler = ({project_id}) => {
    navigate('/editproject/'+project_id)
  }
  return (props) => {
    return (
      <div className="relative">
        <button
           onClick={() => onClickHandler(props?.data)}
          className="absolute top-0 right-0 flex items-center gap-2 p-1 bg-gray-200 px-2 rounded-bl-xl"
        >
          <i class="bi bi-pen text-gray-800 text-xs"></i>
          <span className="text-xs text-gray-400">Modify</span>
        </button>
        <button
          className={
            props?.data?.status === "Pending"
              ? "bg-yellow-600 absolute top-0 left-0 flex items-center gap-2 p-1 px-2 rounded-br-xl "
              : props?.data?.status === "Rejected"
              ? "bg-red-500 absolute top-0 left-0 flex items-center gap-2 p-1 px-2 rounded-br-xl"
              : "bg-green-500 absolute top-0 left-0 flex items-center gap-2 p-1 px-2 rounded-br-xl"
          }
        >
          <span className="text-xs text-white">{props?.data?.status}</span>
        </button>
        <Card {...props} />
      </div>
    );
  };
};
