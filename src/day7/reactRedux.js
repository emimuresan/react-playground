import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware  from 'redux-thunk';


const DEFAULT_STATE = {
    users: null
}


/**
 * ACTION TYPES
 */ 
export const SET_USERS = 'SET_USERS';


/*
 * ACTION CREATORS
 */

export const setUsers = (users) => ({
  type: SET_USERS, users: users
});


/**
 * REDUCERS
 */ 
const setUsersReducer = (state, action) => {
    
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
  applyMiddleware(thunkMiddleware)
));

export default store;
