import { useSelector, useDispatch } from "react-redux";
import { setIsAuth, setUser } from "../store/userSlice";
import { IStore } from "../models/IStore";

export function useUser() {
  const { isAuth, user, isShowingLogout } = useSelector(
    (state: IStore) => state.user
  );
  const dispatch = useDispatch();
  function toggleUserAuth(isAuth: boolean) {
    dispatch(setIsAuth({ isAuth }));
  }
  function changeUser(user: any) {
    dispatch(setUser({ user: user }));
  }
  return {
    user,
    isAuth,
    isShowingLogout,
    toggleUserAuth,
    changeUser,
  };
}
