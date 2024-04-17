import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  tagTypes: ["Product", "AdminProducts"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
      }),
      providesTags: ["AdminProducts"],
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),
    submitReview: builder.mutation({
      query(body) {
        return {
          url: `/reviews`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    canUserReview: builder.query({
      query: (id) => ({
        url: `/can_review?productId=${id}`,
      }),
    }),
    createProduct: builder.mutation({
      query(body) {
        return {
          url: `/admin/products`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["AdminProducts"],
    }),
    updateProduct: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/product/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["AdminProducts"],
    }),
    uploadProductImages: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/product/${id}/upload_images`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useSubmitReviewMutation,
  useCanUserReviewQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImagesMutation,
} = productApi;
