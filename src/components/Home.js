import React from 'react'
import {Link} from 'react-router-dom'
import MessageTimeline from "./MessageTimeline"

export default function Home({currentUser}) {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="Home">
        <div><h1 className='blue-text text-darken-4'>Welcome to Warbler</h1></div>
        <div><Link to="/signup" className="btn blue darken-4">Sign Up Here</Link></div>
        <div><Link to="/signin" className="btn">Sign In Here</Link></div>
      </div>
    )
  } else {
    return (
      <MessageTimeline 
        profileImageUrl={currentUser.user.profileImageUrl}
        username = {currentUser.user.username}
      />
    )
  }
}
