import React, { Component } from "react";
import Main from "./Main"
import Nav from "../containers/Nav"
import {Provider} from "react-redux"
import {configureStore} from "../store"
import {BrowserRouter as Router} from "react-router-dom"
import {setAuthorizationToken, setCurrentUser} from "../store/actions/auth"
import jwtDecode from "jwt-decode"

const store=configureStore()

if (localStorage.jwtToken) {
     setAuthorizationToken(localStorage.jwtToken)
     try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
     } catch(err) {
       store.dispatch(setCurrentUser({}))
     }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav/>
            <Main/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
