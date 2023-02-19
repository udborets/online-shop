import { $authHost, $host } from ".";
import { IBrand } from "../models/IBrand";
import { IDevice } from "../models/IDevice";

export const createType = async (type: string) => {
  const { data } = await $authHost.post("api/type", { name: type });
  return data;
};

export const createBrand = async (brand: any) => {
  const { data } = await $authHost.post("api/brand", { ...brand});
  return data;
};

export const createDevice = async (device: FormData) => {
  const { data } = await $authHost.post("api/device", device );
  return data;
};

export const fetchBrands = async (): Promise<IBrand[]> => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const fetchDevices = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

export const fetchDevice = async (id: string): Promise<IDevice> => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
