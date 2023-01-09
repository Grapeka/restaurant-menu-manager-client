import { createSlice } from '@reduxjs/toolkit';
import { IMerchant } from '../types/merchant';

export const merchantSlice = createSlice({
  name: 'merchant',
  initialState: {
    id: '',
    name: '',
    email: '',
    password: '',
    facebook: '',
    instagram: '',
  },
  reducers: {
    setMerchant: (state: IMerchant, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.facebook = action.payload.facebook;
      state.instagram = action.payload.instagram;
    },
  },
});

export const { setMerchant } = merchantSlice.actions;
export default merchantSlice.reducer;
