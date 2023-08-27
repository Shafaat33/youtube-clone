import React from "react";
import { Link } from "react-router-dom";

const VideoCard = (props) => {

  const { info } = props;
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 rounded-lg shadow-lg">
      <Link to={"/watch?v="+id}>
      <img alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
      </Link>
    </div>
  )
}

export default VideoCard;
