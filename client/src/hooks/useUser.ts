import { useSelector, useDispatch } from "react-redux";
import { setIsAuth, setIsShowingLogout, setUser } from "../store/userSlice";
import { IStore } from "../models/IStore";

export function useUser() {
  const user = useSelector((state: IStore) => state.user);
  const dispatch = useDispatch();
  function toggleUserAuth(isAuth: boolean) {
    dispatch(setIsAuth({ isAuth }));
  }
  function toggleIsShowingLogout(isShowingLogout: boolean) {
    dispatch(setIsShowingLogout({ isShowingLogout }));
  }
  function changeUser(user: any) {
    dispatch(setUser({ user: user }));
  }
  return { user, toggleUserAuth, toggleIsShowingLogout, changeUser };
}
