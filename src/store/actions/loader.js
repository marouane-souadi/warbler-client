import {ADD_LOADER, REMOVE_LOADER} from "../actionTypes"

export const addLoader = () => ({
    type : ADD_LOADER,
})

export const removeLoader = () => ({
    type : REMOVE_LOADER
})