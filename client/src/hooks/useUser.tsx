import { useSelector, useDispatch } from "react-redux";
import { setIsAuth } from "../store/userSlice";
import { IStore } from './../models/IStore';

export function useUser() {
  const user = useSelector((state: IStore) => state.user);
  const dispatch = useDispatch();
  function toggleUserAuth() {
    dispatch(setIsAuth({ isAuth: !user.isAuth }));
    console.log('User isAuth has changed to', user.isAuth);
  }
  return { user, toggleUserAuth }
}