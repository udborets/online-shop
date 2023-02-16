import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import { setSelectedBrand, setSelectedType } from "../store/deviceSlice";
import { IType } from "./../models/IType";
import { IBrand } from "./../models/IBrand";

export function useDevice() {
  const dispatch = useDispatch();
  const device = useSelector((state: IStore) => state.device);
  const selectType = (type: IType) => {
    dispatch(setSelectedType({ type: type }));
  };
  const selectBrand = (brand: IBrand) => {
    dispatch(setSelectedBrand({ brand: brand }));
  };
  const getDeviceById = (id: number) => {
    return device.devices.filter((device) => device.id === id)[0]
  }
  return { device, selectType, selectBrand, getDeviceById };
}
