import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../config/urls';
import token from '../../config/Token';

export const userSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getUser: builder.query({
          query: () => ({
              url: '/users',
              method: 'GET',
              headers: {
                "authorization": `${token}`
              }
          })
      }),
     
    }),
  })
  
  
    export const { useGetUserQuery } = userSlice;