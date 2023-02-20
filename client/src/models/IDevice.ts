import IDeviceInfo from "./IDeviceInfo";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: [IDeviceInfo];
  typeId: number;
  brandId: number;
}
