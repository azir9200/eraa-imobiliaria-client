import { baseApi } from "../baseApi/baseApi";

const getMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getMe: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = getMeApi;
