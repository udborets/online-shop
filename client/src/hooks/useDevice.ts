import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import { setDevices } from "../store/deviceSlice";
import { IDevice } from "./../models/IDevice";
import { fetchDevices } from "../http/deviceApi";

export function useDevice() {
  const dispatch = useDispatch();
  const { devices } = useSelector((state: IStore) => state.device);
  const createDevices = (devices: IDevice[]) => {
    dispatch(setDevices({ devices }));
  };
  const updateDevices = () => {
    fetchDevices().then((fetchedDevices) => createDevices(fetchedDevices));
  };
  return {
    devices,
    createDevices,
    updateDevices,
  };
}
