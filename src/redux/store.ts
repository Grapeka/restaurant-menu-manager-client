import { configureStore } from '@reduxjs/toolkit';
import merchantReducer from './merchant';

export default configureStore({
  reducer: {
    merchant: merchantReducer,
  },
});
