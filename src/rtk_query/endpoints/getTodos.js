// import { apiSlice } from "../apiSlice";

import { apiSlice } from "../apiSlice";

// const getTodos = apiSlice.injectEndpoints({
//   endpoints: (builder) => {
//     return {
//       getTodos: builder.query({
//         query: () => "/todos",
//         providesTags: ["getTodosTag"],
//       }),
//     };
//   },
// });
// export const { useGetTodosQuery } = getTodos;

const getTodos = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["getTodosTag"],
    }),
  }),
});

export const { useGetTodosQuery } = getTodos;
