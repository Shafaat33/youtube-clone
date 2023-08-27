import React, { useEffect } from "react";
import { closeMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = (props) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        >
      </iframe>
    </div>
  )
};

export default WatchPage;
