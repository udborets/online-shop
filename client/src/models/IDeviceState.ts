import { IType } from "./IType";
import { IBrand } from "./IBrand";
import { IDevice } from "./IDevice";

export interface IDeviceState {
  types: [IType];
  brands: [IBrand];
  devices: [IDevice];
  selectedType: IType;
  selectedBrand: IBrand;
}
