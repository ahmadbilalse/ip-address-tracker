import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import ipGeolocatorReducer from '../features/ipGeolocator/ipGeolocatorSlice'
import { ipApi } from './services/ipApi'

export const store = configureStore({
  reducer: {
    ipGeolocator: ipGeolocatorReducer,
    [ipApi.reducerPath]: ipApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipApi.middleware),
})

setupListeners(store.dispatch)
