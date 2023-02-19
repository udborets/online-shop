import { $authHost, $host } from ".";
import { IBrand } from "../models/IBrand";

export const createType = async (type: string) => {
  const { data } = await $authHost.post("api/type", { name: type });
  return data;
};

export const createBrand = async (brand: string) => {
  const { data } = await $authHost.post("api/brand", { name: brand });
  return data;
};

export const createDevice = async (brand: string) => {
  const { data } = await $authHost.post("api/device", { name: brand });
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

export const fetchDevice = async (id: number) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};
