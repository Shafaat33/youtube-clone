import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { randomstring } from "./utils/helper";
import { addMessage } from "./utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("api calling");
      dispatch(addMessage({
        name: randomstring(6),
        text: randomstring(20),
      }))
    }, 2000);

    return () => {
      clearInterval(i);
    }
  }, [])

  return (
    <>
      <div className="p-2 ml-2 border border-black w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((mes, index) => (
            <ChatMessage
              key={index}
              name={mes.name}
              message={mes.text}
            />
          ))}
        </div>
      </div>

      <form
        className="flex w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "shafaat",
            text: liveMessage,
          }));
          setLiveMessage("");
        }}
       >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  )
}

export default LiveChat;
