import React from "react"
import Moment from "react-moment"
import {Link} from "react-router-dom"
import DefaultProfileImage from "../images/default-profile.png"

const MessageItem = ({text, date, username, profileImageUrl, removeMessage, isCorrectUser}) => {
  return (
    <li className="collection-item avatar">
      <img
        src={profileImageUrl || DefaultProfileImage} 
        alt={username}
        className="circle"/>
      <span className="title">
        <Link to="/">@{username} &nbsp;</Link>
        <Moment format="Do MMM YYYY">{date}</Moment>
      </span>
      <p>{text}</p>
      {isCorrectUser && (<a href="#" className="secondary-content" onClick={removeMessage}>
        <i className="material-icons red-text">delete</i>
      </a>)}
    </li>
  )
}

export default MessageItem