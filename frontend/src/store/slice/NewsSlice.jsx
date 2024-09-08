import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../../config/urls';
import token from '../../config/Token';


export const newsSlice = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => '/news',
            providesTags: ['News'],
        }),
        storeNews: builder.mutation({
            query: (body) => ({
                url: '/news',
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['News'],

        }),

        showNews: builder.query({
            query: (id) => `/news/${id}`,
            providesTags: ['News'],
        }),

        updateNews: builder.mutation({
            query: ({ id, body }) => ({
                url: `/news/${id}`,
                method: 'PUT',
                body: body
            }),
            invalidatesTags: ['News'],
        }),

        deleteNews: builder.mutation({
            query: (id) => ({
                url: `/news/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['News'],
        }),
        getNewsBySlug: builder.query({
            query: (slug) => `/news/news-details/${slug}`,
            providesTags: ['News'],
        }),




    }),
})


export const {
    useGetNewsQuery,
    useStoreNewsMutation,
    useShowNewsQuery,
    useUpdateNewsMutation,
    useDeleteNewsMutation,
    useGetNewsBySlugQuery

} = newsSlice;