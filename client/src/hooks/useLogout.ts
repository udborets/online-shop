import { useDispatch } from "react-redux";
import { setIsShowingLogout } from "../store/userSlice";

export function useLogout() {
  const dispatch = useDispatch();
  function toggleIsShowingLogout(isShowingLogout: boolean) {
    dispatch(setIsShowingLogout({ isShowingLogout }));
  }
  return {
    toggleIsShowingLogout,
  };
}
