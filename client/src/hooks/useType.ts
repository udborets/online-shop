import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import { setSelectedType, setTypes } from "../store/deviceSlice";
import { IType } from "../models/IType";
import { fetchTypes } from "../http/deviceApi";

export function useType() {
  const dispatch = useDispatch();
  const device = useSelector((state: IStore) => state.device);
  const types = device.types;
  const selectedType = device.selectedType;
  const selectType = (type: IType) => {
    dispatch(setSelectedType({ type: type }));
  };
  const createTypes = (types: IType[]) => {
    dispatch(setTypes({ types }));
  };
  const updateTypes = () => {
    fetchTypes().then((fetchedTypes) =>
      createTypes([{ id: -1, name: "All" }, ...fetchedTypes])
    );
  };
  return {
    types,
    selectedType,
    selectType,
    createTypes,
    updateTypes,
  };
}
