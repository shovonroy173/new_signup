import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com"}),
    tagTypes: ["getTodosTag"],
    endpoints: () => ({
        // getTodos: builder.query({
        //     query: () => `/todos`
        // }),
    }),
});

// export const {useGetTodosQuery} = apiSlice;