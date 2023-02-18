import IUser from "./IUser";

export default interface IUserState {
  isAuth: boolean;
  user: IUser;
  isShowingLogout: boolean;
}
