import React, { Component } from "react"
import {connect} from "react-redux"
import {postNewMessage} from "../store/actions/messages"

class MessageForm extends Component {
  state = {
    message : ""
  }

  handleChange = (e) => {
    this.setState({message : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.postNewMessage(this.state.message)
    this.setState({message : ""})
    this.props.history.push("/")
  }

  render() {
    return (

      <div className="row container">
        <form onSubmit={this.handleSubmit} className="col s8">
          {(this.props.errors.message)&&(
            <div className="red-text">{this.props.errors.message}</div>
          )}
          <div className="input-field">
            <label htmlFor="message">Your Text here</label>
            <input 
              autoFocus
              id="message"
              name="message"
              type="text" 
              value={this.state.message}
              onChange={this.handleChange}/>
          </div>
          <button className="btn" type="submit">Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors : state.errors
})

export default connect(mapStateToProps, {postNewMessage}) (MessageForm)
