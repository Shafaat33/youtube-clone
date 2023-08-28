import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheData } from "./utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedData, setSuggestedData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cacheResult = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[searchQuery]) {
        setSuggestedData(cacheResult[searchQuery]);
      } else {
        fetchSearchSuggestion();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const fetchSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json.items);
    setSuggestedData(json[1]);
    dispatch(cacheData({ [searchQuery]: json[1] }));
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="sticky top-0 grid grid-flow-col p-5 m-2 shadow-lg bg-white">
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

      <div className="col-span-10 px-10">
        <div>
          <input 
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            placeholder="search"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">search</button>
          {showSuggestions && (
            <div className="fixed py-2 px-2 border border-gray-100 w-auto shadow-lg bg-white rounded-lg">
            <ul>
              {suggestedData.map((item) => <li className="py-2 px-3 shadow-sm hover:bg-gray-100">{item}</li>)}
            </ul>
          </div>
          )}
        </div>
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