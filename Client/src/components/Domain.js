import React from "react";
import { techLibrary } from "../utils/techLibrary";

const Domain = ({ stacks }) => {
  return (
	<div className="flex gap-4 flex-wrap mt-2">
	  {stacks.map((data, index) => {
		const techItem = techLibrary.find(item => item.name.toLowerCase() === data.toLowerCase()) // Find matching entry in techLibrary
		if (techItem) {
		  return (
			<div key={index} className="p-1 w-14 border-gray-200 border-[1px] rounded-lg">
			  <img className="w-12" src={`/techs/${techItem.image}`} alt={`${techItem.name} Logo`} />
			  <p className="text-sm text-center capitalize truncate">{data}</p>
			</div>
		  );
		} else {
			return (
				<div key={index} className="p-1 w-14 border-gray-200 border-[1px] rounded-lg">
				  <img className="w-12" src={`/asset/setting.png`} alt="logo" />
				  <p className="text-sm text-center capitalize">{data}</p>
				</div>
			  );
		}
	  })}
	</div>
  );
};

export default Domain;
