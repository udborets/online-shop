import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload.isAuth;
    },
    setUser(state, action) {
      state.user = action.payload.user
    }
  }
})

export const {setIsAuth, setUser} = userSlice.actions;
export default userSlice.reducer;