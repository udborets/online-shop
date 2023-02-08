import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "device",
  initialState: {
    types : [
      {id: 1, name: 'frezer'},
      {id: 2, name: 'phone'},
    ],
    brands: [
      {id: 1, name: 'samsung'},
      {id: 2, name: 'xiaomi'},
    ],
    devices: [
      {id: 1, name: 'Apple iphone 1', price: 25000, rating: 2, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
      {id: 2, name: 'Apple iphone 2', price: 25000, rating: 0, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
      {id: 3, name: 'Apple iphone 3', price: 25000, rating: 2, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
      {id: 4, name: 'Apple iphone 4', price: 25000, rating: 4, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
      {id: 5, name: 'Apple iphone 5', price: 25000, rating: 3, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
      {id: 6, name: 'Apple iphone 6', price: 25000, rating: 1, 
      img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'},
    ]
  },
  reducers: {
    setTypes(state, types : any) {
      state.types = types;
    },
    setBrands(state, brands: any) {
      state.brands = brands;
    },
    setDevices(state, devices: any) {
      state.devices = devices;
    },
  }
})

export const {setTypes, setBrands, setDevices} = userSlice.actions;
export default userSlice.reducer;