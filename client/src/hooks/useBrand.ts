import { useDispatch, useSelector } from "react-redux/es/exports";
import { IStore } from "../models/IStore";
import { setBrands, setSelectedBrand } from "../store/deviceSlice";
import { IBrand } from "./../models/IBrand";
import { fetchBrands } from "../http/deviceApi";

export function useBrand() {
  const dispatch = useDispatch();
  const device = useSelector((state: IStore) => state.device);
  const brands = device.brands;
  const selectedBrand = device.selectedBrand;
  const selectBrand = (brand: IBrand) => {
    dispatch(setSelectedBrand({ brand: brand }));
  };
  const createBrands = (brands: IBrand[]) => {
    dispatch(setBrands({ brands }));
  };
  const updateBrands = () => {
    fetchBrands().then((fetchedBrands) =>
      createBrands([{ id: -1, name: "All" }, ...fetchedBrands])
    );
  };
  return {
    brands,
    selectedBrand,
    selectBrand,
    createBrands,
    updateBrands,
  };
}
