import { createStore } from 'redux';
import tourReducer from './reducer';

const store = createStore(tourReducer);

export default store;
