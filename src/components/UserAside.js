import React from "react"
import DefaultProfileImage from "../images/default-profile.png"

const UserAside = ({profileImageUrl, username}) => {
  return (
    <div className="col s4">
      <div className="card small">
        <div className="card-image">
          <img src={profileImageUrl||DefaultProfileImage} alt={username}/>
        </div>
        <div className="card-content">
        <span className="card-title">{username}</span>
        </div>
      </div>
    </div>
  )
}

export default UserAside