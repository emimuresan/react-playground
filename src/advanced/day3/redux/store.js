import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware  from 'redux-thunk';
import api from './api';
import rootReducer from './reducers';

/**
 * CONFIGURE STORE
 */

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument(api))
));

export default store;