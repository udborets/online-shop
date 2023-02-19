import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "device",
  initialState: {
    types: [],
    brands: [],
    devices: [],
    selectedType: {},
    selectedBrand: {},
  },
  reducers: {
    setTypes(state, action) {
      state.types = action.payload.types;
    },
    setBrands(state, action) {
      state.brands = action.payload.brands;
    },
    setDevices(state, action) {
      state.devices = action.payload.devices;
    },
    setSelectedType(state, action) {
      state.selectedType = action.payload.type;
    },
    setSelectedBrand(state, action) {
      state.selectedBrand = action.payload.brand;
    },
  },
});

export const {
  setTypes,
  setBrands,
  setDevices,
  setSelectedType,
  setSelectedBrand,
} = userSlice.actions;
export default userSlice.reducer;
