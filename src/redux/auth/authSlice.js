import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handleFulfilledPost = (state, action) => {
  state.isLoggedIn = true;
  state.user = action.payload.user;
  state.token = action.payload.token;
};
const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshingTrue = state => {
  state.isRefreshing = true;
};

const handleRefreshingFull = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshingFalse = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    user: { name: null, email: null },
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder

      .addCase(register.fulfilled, handleFulfilledPost)

      .addCase(logIn.fulfilled, handleFulfilledPost)

      .addCase(logOut.fulfilled, handleFulfilledLogOut)

      .addCase(refreshUser.pending, handleRefreshingTrue)
      .addCase(refreshUser.fulfilled, handleRefreshingFull)
      .addCase(refreshUser.rejected, handleRefreshingFalse);
  },
});

export const authReducer = authSlice.reducer;