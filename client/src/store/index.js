import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

//https://www.youtube.com/watch?v=uDGBfeXkAog
//https://redux.js.org/introduction/why-rtk-is-redux-today
//para otro día
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from '../reducer'; 
// // import filtersReducer from '../features/filters/filtersSlice'

// export const store = configureStore({
//   reducer: {
//     todos: rootReducer,
//     // filters: filtersReducer
//   }
// })
