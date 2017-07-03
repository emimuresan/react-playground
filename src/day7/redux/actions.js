import axios from 'axios';

/**
 * ACTION TYPES
 */ 
export const SET_USERS = 'SET_USERS';
export const SELECT_USER = 'SELECT_USER';

/*
 * ACTION CREATORS
 */

export const setUsers = (users) => ({
  type: SET_USERS, users: users
});

export const selectUser = (userId) => ({
  type: SELECT_USER, selectedUser: userId
});

export const fetchUsers = (nrUsers) => {
    // this is called by Redux
    return function(dispatch, getState, api) {
        return axios.get(api.ENDPOINT.USERS + '?nat=us&results=' + nrUsers)
            .then((response) => {
                dispatch(setUsers(response.data.results));
                //console.log('user data:', JSON.stringify(response.data.results[0], undefined, 4));
            })
            .catch(api.handleError);
    }
}
