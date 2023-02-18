import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: {},
    isShowingLogout: false,
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload.isAuth;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setIsShowingLogout(state, action) {
      state.isShowingLogout = action.payload.isShowingLogout;
    },
  },
});

export const { setIsAuth, setUser, setIsShowingLogout } = userSlice.actions;
export default userSlice.reducer;
