import React, {Component} from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import logo from "../images/logo.jpg"
import {logout} from "../store/actions/auth"

class Nav extends Component {
  logout = (e) =>{
    e.preventDefault()
    this.props.logout()
  }

  render() {
    
    return (
      <nav className="blue darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="Warbler"/>
          </Link>
          {
            this.props.currentUser.isAuthenticated? (
              <ul className="right">
                <li>
                  <Link to={`/users/${this.props.currentUser.user.id}/messages/new`} >
                    New Message
                  </Link>
                </li>
                <li>
                  <a onClick={this.logout}>Log out</a>
                </li>
              </ul>

            ) : (
              <ul className="right">
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
            </ul>
            )
          }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser : state.currentUser
})
export default connect(mapStateToProps, {logout})(Nav)