import React from "react";
import Message from './Message';
import MessageCard from "./MessageCard"

const Messages = ({messages}) => {
  // const [lastUser, setLastUser] = useState();


  // console.log("This is messages...");
  // console.log(props.userId?.name)
  return (
    <div className="container">
      {messages && messages.map((message) => {
        return <MessageCard key={message._id} {...message}/>
      })}
      </div>
      )}

export default Messages

      
