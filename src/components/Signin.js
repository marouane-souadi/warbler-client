import React, {Component} from "react"

export default class Signin extends Component {
  state = {
    email : "",
    password : ""
  }
  componentDidMount = () => {
    this.props.removeError()
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuth("signin", this.state)
      .then(()=>{
        this.props.history.push("/")
      })
      .catch(()=>{
        return
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  render() {
    const {email, password} = this.state
    const {errors} = this.props
    return(
      <div className="signin">
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <h2>Welcome Back</h2>
          {(errors.message)&&(<div className="red-text">{errors.message}</div>)}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn" type="submit">Log me in!</button>
        </form>
      </div>
    )
  }
}