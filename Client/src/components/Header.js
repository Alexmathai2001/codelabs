import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 h-14 items-center bg-r[F5F5F5] border border-b-2">
      <div className="flex">
        <a href="www.sample.com"><img className="w-6" alt="logo" src="/asset/logo.png"></img></a>
        <p className="ms-3 font-semibold text-gray-500">Code Labs</p>
      </div>
      <div className="flex gap-2">
        <Link to={"/signin"}>
          <img className="w-6" alt="favorites" src="/asset/favorites.png" />
        </Link>
        <Link to={"/myprofile"}>
          <img className="w-6" alt="account" src="/asset/account.png" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
