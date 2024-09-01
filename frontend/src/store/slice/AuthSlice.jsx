import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../config/urls';
import token from '../../config/Token';


export const authSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
        query: (body) => ({
            url: '/auth',
            method: 'POST',
            body,
        })
    }),
    loginUserVerify: builder.query({
        query: () => ({
            url: '/auth/verify',
            method: 'GET',
            headers: {
              'authorization': `Bearer ${token}`
            }
        })
      }),
   
  }),
})


export const { 
  useLoginUserMutation,
  useLoginUserVerifyQuery

} = authSlice;