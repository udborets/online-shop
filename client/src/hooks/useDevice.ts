import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import { setSelectedType } from "../store/deviceSlice";

export function useDevice() {
  const dispatch = useDispatch();
  const device = useSelector((state: IStore) => state.device);
  const selectType = (type: any) => {
    dispatch(setSelectedType({ type: type }));
  };
  return { device, selectType };
}
