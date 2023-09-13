// Here are all the end points of the user APIs
import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';

// Inject the endpoints into the apiSlice.js
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // a. POST endpoint for login
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApiSlice;
