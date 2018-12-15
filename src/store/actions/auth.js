import {apiCall, setTokenHeader} from "../../services/api"
import {SET_CURRENT_USER} from "../actionTypes"
import {addError, removeError} from "./errors"

const API_URL = "/api"

export const setCurrentUser = (user) => ({
  type : SET_CURRENT_USER,
  user
})

export const setAuthorizationToken = (token) => {
  setTokenHeader(token)
}
export const logout = () => {
  return dispatch => {
    localStorage.clear()
    setAuthorizationToken(false)
    dispatch(setCurrentUser({}))
  }
}

export const authUser = (type, userData) => {
  return dispatch => new Promise((resolve, reject)=> {
    return apiCall("post",API_URL+"/auth/"+type, userData)
      .then(({token, ...user}) => {
        localStorage.setItem("jwtToken", token)
        setAuthorizationToken(token)
        dispatch(setCurrentUser(user))
        dispatch(removeError())
        resolve()
      })
      .catch(err=> {
        dispatch(addError(err.message))
        reject()
      })
  })
}