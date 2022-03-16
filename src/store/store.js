import { createStore } from 'redux';
import { combineReducers } from 'redux';
// REDUCERS
import { todosReducer } from './todosSlice/todosReducer';
import { filtersReducer } from './filtersSlice/filtersReducer';

// ROOT REDUCER
const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

const store = createStore(rootReducer);

export default store;