import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export default store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
