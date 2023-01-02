import { createSlice } from '@reduxjs/toolkit';
import { register,logIn} from '../auth/authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogin: false,
  isRefreshing: false,
};

const auhtSlice = createSlice({
  name: 'auth',
  initialState,
  
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(register.rejected, (state, action) => state)

      .addCase(logIn.pending,(state,action)=>state)
      .addCase(logIn.fulfilled,(state,action)=>state)
      .addCase(logIn.rejected,(state,action)=>state)





});

export const authReducer = auhtSlice.reducer;
