import { combineReducers } from 'redux';
import merchantReducer from './merchant';
import authReducer from './auth';

// Combine the reducers into a single reducer function
const rootReducer = combineReducers({
  merchant: merchantReducer,
  auth: authReducer,
});

export default rootReducer;
