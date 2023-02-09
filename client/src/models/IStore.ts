import { IDeviceState } from './IDeviceState';
import IUserState from './IUserState';

export interface IStore {
  device: IDeviceState,
  user: IUserState,
}