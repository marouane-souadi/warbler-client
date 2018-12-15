import React, {Component} from "react"

class Signup extends Component {
  state = {
    email : "",
    username : "",
    password : "",
    profileImageUrl : ""
  }

  componentDidMount = () => {
    this.props.removeError()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuth("signup", this.state)
      .then(()=>{
        this.props.history.push("/")
      })
      .catch((e)=>{
        return
      })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    const {email, username, password, profileImageUrl} = this.state
    const {errors} = this.props
    return(
      <div className="signup">
        <form className="signup-form" onSubmit={this.handleSubmit}>
            <h2>Join Warbler today</h2>
            {(errors.message)&&(<div className="red-text">{errors.message}</div>)}
            <div className="input-field">
              <label htmlFor="email">E-mail</label>
              <input 
                id="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="profileImageUrl">Image URL</label>
              <input
                id="profileImageUrl"
                type="text"
                name="profileImageUrl"
                value={profileImageUrl}
                onChange={this.handleChange}
              />
            </div>
            <button className="btn" type="submit">Sign me up!</button>
        </form>
      </div>
    )
  }
}

export default Signup