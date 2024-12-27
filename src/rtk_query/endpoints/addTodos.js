import { apiSlice } from "../apiSlice";

export const addTodo = apiSlice.injectEndpoints({   
  endpoints: (builder) => {
    return {
      addTodo: builder.mutation({
        query: (todo) => ({
          url: "/todos/add",
          method: "POST",
          body: todo,
        }),
        invalidatesTags: ["getTodosTag"],
      }),
    };
    
  },
});

export const { useAddTodoMutation } = addTodo;