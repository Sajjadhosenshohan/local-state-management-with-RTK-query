import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ['task'],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({

    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["task"]
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"]
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTasksQuery,useCreateTaskMutation } = baseApi;
