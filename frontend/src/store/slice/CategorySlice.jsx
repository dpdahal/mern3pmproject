import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../config/urls';
import token from '../../config/Token';


export const categorySlice = createApi({
    reducerPath: 'categroyApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategroy: builder.query({
            query: () => '/category',
            providesTags: ['Category'],
        }),
        storeCategroy: builder.mutation({
            query: (body) => ({
                url: '/category',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['Category'],

        }),

        showCategroy: builder.query({
            query: (id) => `/category/${id}`,
            providesTags: ['Category'],
        }),

        updateCategroy: builder.mutation({
            query: ({ id, body }) => ({
                url: `/category/${id}`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: ['Category'],
        }),

        deleteCategroy: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category'],
        }),


    }),
})


export const {
    useGetCategroyQuery,
    useStoreCategroyMutation,
    useShowCategroyQuery,
    useUpdateCategroyMutation,
    useDeleteCategroyMutation
} = categorySlice;