import { configureStore } from '@reduxjs/toolkit';
import merchantReducer from './merchant';
import authReducer from './auth';

export default configureStore({
  reducer: {
    merchant: merchantReducer,
    auth: authReducer,
  },
});
