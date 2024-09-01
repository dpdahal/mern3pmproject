import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../config/urls';

export const userSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getUser: builder.query({
          query: () => ({
              url: '/users',
              method: 'GET',
          })
      }),
     
    }),
  })
  
  
    export const { useGetUserQuery } = userSlice;