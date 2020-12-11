import React from "react"
import {connect} from "react-redux"
import Signup from "../components/Signup"
import Signin from "../components/Signin"
import Home from "../components/Home"
import Loader from "../components/Loader";
import {Switch, Route, withRouter} from "react-router-dom"
import {authUser} from "../store/actions/auth"
import {removeError} from "../store/actions/errors"
import withAuth from "../hocs/withAuth"
import MessageForm from "./MessageForm"

const Main = (props) => {
  const {authUser, errors, removeError, currentUser, loader} = props
  return (
    <div className="Main">
      <Loader isLoading={loader} />
      <Switch>
        <Route 
          exact path="/" 
          render={p => <Home currentUser={currentUser} {...p}/>}
        />
        <Route 
          exact path="/signin" 
          render={p => <Signin {...p} onAuth={authUser} errors={errors} removeError={removeError}/>}>
        </Route>
        <Route 
          exact path="/signup" 
          render={p => <Signup {...p} onAuth={authUser} errors={errors} removeError={removeError}/>}>
        </Route>
        <Route
          exact path="/users/:user/messages/new"
          component={withAuth(MessageForm)}
        >
        </Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentUser : state.currentUser,
  errors : state.errors,
  loader: state.loader,
})


export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main))
