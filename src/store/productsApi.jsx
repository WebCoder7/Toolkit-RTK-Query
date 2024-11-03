import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",
            providesTags: (result) =>
                result
                    ? [...result.map(() => ({ type: 'products' })), { type: 'products' }] : [{ type: 'products' }]
        }),
        addProducts: builder.mutation({
            query: (newData) => ({
                url: "/products",
                method: "post",
                body: newData
            }),
            invalidatesTags: [{ type: 'products' }]
        }),
        deleteProducts: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "delete"
            }),
            invalidatesTags: ['products']
        })
    })
})
export const { useGetAllProductsQuery, useAddProductsMutation, useDeleteProductsMutation } = productsApi 