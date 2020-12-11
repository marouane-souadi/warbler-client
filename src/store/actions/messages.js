import {apiCall} from "../../services/api"
import {addError} from "./errors"
import {LOAD_MESSAGES, REMOVE_MESSAGE} from "../actionTypes"
import {addLoader, removeLoader} from "./loader";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
})

export const fetchMessages = () => {
  return dispatch => {
    dispatch(addLoader());
    return apiCall("get", "api/messages")
      .then((messages) => {
        dispatch(loadMessages(messages))
      })
      .catch(err => {
        dispatch(addError(err.message))
      })
      .finally(() => {
        dispatch(removeLoader());
      })
  }
}

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
})

export const removeMessage = (user_id, message_id) => (dispatch) => {
  dispatch(addLoader());
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => dispatch(addError(err.message)))
      .finally(() => {
        dispatch(removeLoader());
      })
  }
}

export const postNewMessage = (text) => (dispatch, getState) => {
  dispatch(addLoader());
  let {currentUser} = getState()
  const id = currentUser.user.id
  return apiCall("post", `/api/users/${id}/messages`, {text})
    .then((m) => {
    })
    .catch(err => {
      dispatch(addError(err.message))
    })
    .finally(() => {
      dispatch(removeLoader());
    })
}