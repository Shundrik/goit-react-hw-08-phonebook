import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../auth/authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const auhtSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder
      //register
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        console.log('regfulfilled-', action.payload);
        console.log(state.user);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log(state.user);
      })
      .addCase(register.rejected, (state, action) => state)
      //logIn
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state)
      //logOut
      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => state)
      //isRefresh
      .addCase(refreshUser.pending, (state, action) => state)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => state),
});

export const authReducer = auhtSlice.reducer;
