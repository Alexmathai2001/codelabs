import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 h-14 items-center bg-r[F5F5F5] border border-b-2">
      <div className="flex">
        <a href="www.sample.com"><img className="w-6" alt="logo" src="/asset/logo.png"></img></a>
        <p className="ms-3 font-semibold text-gray-500">Code Labs</p>
      </div>
      <div className="flex gap-2">
        <a href="www.sample.com">
          <img className="w-6" alt="favorites" src="/asset/favorites.png" />
        </a>
        <a href="www.sample.com">
          <img className="w-6" alt="account" src="/asset/account.png" />
        </a>
      </div>
    </div>
  );
};

export default Header;
