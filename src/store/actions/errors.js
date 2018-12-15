import {ADD_ERROR, REMOVE_ERROR} from "../../store/actionTypes"

export const addError = error => ({
  type : ADD_ERROR,
  error
})

export const removeError = () => ({
  type : REMOVE_ERROR
})