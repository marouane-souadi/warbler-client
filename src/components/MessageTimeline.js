import React from 'react'
import MessageList from "../containers/MessageList"
import UserAside from "./UserAside"

export default function MessageTimeline({username, profileImageUrl}) {
  return (
    <div className="row container">
      <UserAside 
        username={username}
        profileImageUrl = {profileImageUrl}
      />
      <MessageList/>
    </div>
  )
}
