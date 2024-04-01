import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } = productApi;