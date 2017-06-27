import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware  from 'redux-thunk';
import toast from 'vanillatoasts';
import { uniqueId as uId } from 'lodash';


const DEFAULT_STATE = [
    {id: uId(), title: 'Background', summary: 'Why do we need redux?', link: 'http://almerosteyn.com/2016/08/redux-explained-again', covered: false},
    {id: uId(), title: 'Principle 1', summary: 'Single source of truth: the state tree', covered: false},
    {id: uId(), title: 'Principle 2', summary: 'State is read-only', covered: false},
    {id: uId(), title: 'Principle 3', summary: 'Changes are made with pure functions (reducers)', covered: false},
    {id: uId(), title: 'The Redux Store', summary: 'createStore() / Implementing Store from Scratch', link: 'https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/03-Implementing_Store_from_Scratch.md', covered: false},
    {id: uId(), title: 'Store Methods', summary: 'getState(), dispatch(), and subscribe()', covered: false},
    {id: uId(), title: 'Store Middleware', summary: 'An extension point between dispatching an action, and the moment it reaches the reducer.', covered: false},
    {id: uId(), title: 'Splitting Reducers', summary: 'combineReducers()', covered: false},
    {id: uId(), title: 'Async Flow', summary: 'Using Redux-thunk for async actions', covered: false}
];


/**
 * ACTION TYPES
 */ 
export const ADD_TOPIC = 'ADD_TOPIC';
export const COVER_TOPIC = 'COVER_TOPIC';


/*
 * ACTION CREATORS
 */

export const addTopic = (topic) => ({
  type: ADD_TOPIC, topic: topic
});

export const coverTopic = (topicId) => ({
  type: COVER_TOPIC, topicId: topicId
});


/**
 * REDUCERS
 */ 
const addTopicReducer = (state, action) => {
    return [...state, action.topic]; // avoiding array mutations

    // example for state represented as an object:
    // return Object.assign({}, state, {userData: action.userData}); // avoiding object mutations
}

const coverTopicReducer = (state, action) => {
    return state.map((topic) => {
        return (topic.id === action.topicId) ? {...topic, covered: true} : topic;
    }); // => array new state
}

/**
 * ROOT REDUCER
 * @param {*} state 
 * @param {*} action 
 */
function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case 'ADD_TOPIC':
            return addTopicReducer(state, action);
        case 'COVER_TOPIC':
            return coverTopicReducer(state, action);
        default:
            return state;
    }
}

// const rootReducer = combineReducers({
//   user,
//   customers,
//   groups: groupMembershipList // groups: groupMembershipList(state.groups, action)
// });
// => { user: {}, customers: {}, groups: {} }

// OR:
// import { combineReducers } from 'redux'
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)

/**
 * CONFIGURE STORE
 */

const toastMiddleware = store => next => action => {
  if (action.error) {
    toast.create({ 
        title: 'Redux',
        text: 'Error: ' + action.error.toString(), 
        timeout: 4000 ,
        type: 'error'
    });
  } else {
    toast.create({
        title: 'Redux',
        text: 'Dispatched action: <br/><i>' + JSON.stringify(action, undefined, 4) + '</i>', 
        timeout: 4000,
        type: 'info'
    });
  }
  next(action);
};
  
// other example confirmation middleware
// if (action.shouldConfirm) {
//   if (confirm('Are you sure?')) {
//     next(action);
//   }
// }

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware, toastMiddleware)
));

export default store;
