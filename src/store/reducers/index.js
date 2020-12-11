import {combineReducers} from 'redux'
import currentUser from './currentUser'
import errors from './errors'
import messages from './messages'
import loader from "./loader";

const rootReducer = combineReducers({
  errors,
  currentUser,
  messages,
  loader,
})

export default rootReducer