import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes'

const DEFAULT_STATE = []

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_MESSAGES : 
      return [...action.messages]
    case REMOVE_MESSAGE :
      return state.filter(m => m._id !== action.id)
    default :
      return state
  }
}