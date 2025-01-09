import { baseApi } from "../baseApi/baseApi";

const housesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getAllHouses: builder.query({
      query: () => ({
        url: "/allHouses",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getHouseDetails: builder.query({
      query: (id) => ({
        url: `allHouses/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllHousesQuery, useGetHouseDetailsQuery } = housesApi;
