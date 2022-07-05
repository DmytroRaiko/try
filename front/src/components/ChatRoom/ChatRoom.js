import React from 'react';
import {MessageForm} from "./MessageForm/MessageForm";
import {MessageList} from "./MessageList/MessageList";
import { useChat} from '../../hooks';
import {useParams} from "react-router";

const ChatRoom = () => {
  const {roomId} = useParams()
  return(
    <div>
      <MessageList messages={useChat(roomId).messages} removeMessage={useChat(roomId).removeMessage} />
      <MessageForm sendMessage={useChat(roomId).sendMessage} username="Ben" />
    </div>
  )
}

export default ChatRoom;
