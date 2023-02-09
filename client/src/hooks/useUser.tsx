import { useSelector, useDispatch } from "react-redux";
import IUserState from "../models/IUserState";
import { setIsAuth } from "../store/userSlice";

export function useUser() {
  const user = useSelector((state: IUserState) => state.user);
  const dispatch = useDispatch(); 
  function toggleUserAuth() {
    dispatch(setIsAuth({isAuth: !user.isAuth}));
    console.log('User isAuth has changed to', user.isAuth);
  }
  return {user, toggleUserAuth}
}