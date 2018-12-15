import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchMessages, removeMessage} from "../store/actions/messages"
import MessageItem from "../components/MessageItem"


class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    const {messages, currentUser} = this.props
    const messageList = messages.map(m => (
      <MessageItem 
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username = {m.user.username}
        profileImageUrl = {m.user.profileImageUrl}
        removeMessage={this.props.removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={m.user._id===currentUser}
      />
    ))
    return (
      <div className="col s8">
        <ul className="collection" id="messages">
          {messageList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messages : state.messages,
  currentUser : state.currentUser.user.id
})

export default connect(mapStateToProps, {fetchMessages, removeMessage})(MessageList)
