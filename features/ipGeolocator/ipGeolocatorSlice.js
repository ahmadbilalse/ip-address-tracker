import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: '',
}

export const ipGeolocatorSlice = createSlice({
  name: 'ipGeolocator',
  initialState,
  reducers: {
    update: (state, action) => {
      state.input = action.payload;
    },
  },
})

export const { update } = ipGeolocatorSlice.actions

export default ipGeolocatorSlice.reducer
