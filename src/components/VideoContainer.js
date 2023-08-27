import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "./utils/constants";
import VideoCard from "./videoCard";

const VideoContainer = () => {

  useEffect(() => {
    getVideos();
  }, []);

  const [videosData, setVideosData] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideosData(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {videosData?.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  )
}

export default VideoContainer;