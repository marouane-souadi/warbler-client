import {ADD_LOADER, REMOVE_LOADER} from '../actionTypes'

export default (state = false, action) => {
    switch (action.type) {
        case ADD_LOADER :
            return true;
        case REMOVE_LOADER :
            return false;
        default :
            return state
    }
}