import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import {
  setBrands,
  setDevices,
  setSelectedBrand,
  setSelectedType,
  setTypes,
} from "../store/deviceSlice";
import { IType } from "./../models/IType";
import { IBrand } from "./../models/IBrand";
import { IDevice } from "./../models/IDevice";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";

export function useDevice() {
  const dispatch = useDispatch();
  const device = useSelector((state: IStore) => state.device);
  const selectType = (type: IType) => {
    dispatch(setSelectedType({ type: type }));
  };
  const selectBrand = (brand: IBrand) => {
    dispatch(setSelectedBrand({ brand: brand }));
  };
  const createDevices = (devices: IDevice[]) => {
    dispatch(setDevices({devices}));
  };
  const createBrands = (brands: IBrand[]) => {
    dispatch(setBrands({brands}));
  };
  const createTypes = (types: IType[]) => {
    dispatch(setTypes({types}));
  };
  const updateTypes = () => {
    fetchTypes().then((fetchedTypes) => createTypes(fetchedTypes))
  }
  const updateBrands = () => {
    fetchBrands().then((fetchedBrands) => createBrands(fetchedBrands))
  }
  const updateDevices = () => {
    fetchDevices().then((fetchedDevices) => createDevices(fetchedDevices))
  }
  return {
    device,
    selectType,
    selectBrand,
    createBrands,
    createDevices,
    createTypes,
    updateBrands,
    updateTypes,
    updateDevices,
  };
}
