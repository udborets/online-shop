import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import deviceReducer from "./deviceSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    device: deviceReducer,
  },
});
