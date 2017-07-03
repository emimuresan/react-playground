import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware  from 'redux-thunk';
import axios from 'axios';
import api from './api';


const DEFAULT_STATE = {
    users: []
}


/**
 * ACTION TYPES
 */ 
export const SET_USERS = 'SET_USERS';
export const FETCH_USERS = 'FETCH_USERS';


/*
 * ACTION CREATORS
 */

export const setUsers = (users) => ({
  type: SET_USERS, users: users
});

export const fetchUsers = (nrUsers) => {
    // this is called by Redux
    return function(dispatch, getState, api) {
        return axios.get(api.USERS + '?nat=us&results=' + nrUsers)
            .then((response) => {
                dispatch(setUsers(response.data.results));
                //console.log('user data:', JSON.stringify(response.data.results[0], undefined, 4));
            })
            .catch((error) => console.log(error));
    }
}


/**
 * REDUCERS
 */ 
const setUsersReducer = (state, action) => {
    return Object.assign({}, state, {users: action.users});
}


/**
 * ROOT REDUCER
 * @param {*} state 
 * @param {*} action 
 */
function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'SET_USERS':
            return setUsersReducer(state, action);
        default:
            return state;
    }
}

/**
 * CONFIGURE STORE
 */

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument(api))
));

export default store;
