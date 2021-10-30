import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ipApi = createApi({
  reducerPath: 'ipApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ipwhois.app/json/' }),
  endpoints: (builder) => ({
    getIpInfo: builder.query({
      query: (ip) => ip,
    }),
  }),
})

export const { useGetIpInfoQuery } = ipApi
