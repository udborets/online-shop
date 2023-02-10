import { IType } from "./IType";

export interface IDeviceState {
  types: [{ id: number; name: string }];
  brands: [{ id: number; name: string }];
  devices: [
    { id: number; name: string; price: number; rating: number; img: string }
  ];
  selectedType: IType;
}
