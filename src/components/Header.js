import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" 
        />
      </div>

      <div className="col-span-10 text-center">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" placeholder="search"/>
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">search</button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&usqp=CAU" />
      </div>
    </div>
  )
};

export default Head;