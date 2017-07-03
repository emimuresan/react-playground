import {uniq as unique} from 'lodash';
import {SET_USERS, SELECT_USER} from './actions';

const DEFAULT_STATE = {
    users: null,
    selectedUser: null
}

/**
 * REDUCERS
 */ 
const setUsersReducer = (state, action) => {
    return {...state, users: action.users};
}

const selectUserReducer = (state, action) => {
    return Object.assign({}, state, {selectedUser: action.selectedUser});
}


/**
 * ROOT REDUCER
 * @param {*} state 
 * @param {*} action 
 */
export default function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_USERS:
            return setUsersReducer(state, action);
        case SELECT_USER:
            return selectUserReducer(state, action);
        default:
            return state;
    }
}

/**
 * SELECTORS
 */

export const getUserSummary = (state) => {
    if (!state.users) {
        return null;
    }
    return {
        guys: state.users.filter((user) => user.gender === 'male'),
        gals: state.users.filter((user) => user.gender === 'female'),
        cities: unique(state.users.map((user) => user.location.city)),
        states: unique(state.users.map((user) => user.location.state)),
        usersTotal: state.users.length
    }
}
