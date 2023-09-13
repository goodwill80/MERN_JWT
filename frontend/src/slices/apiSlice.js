// These implement the thunk middleware
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

// This is the parent for all api slices
export const apiSlice = createApi({
  // Url
  baseQuery,
  // cache identification - insert all api slices in the array
  tagTypes: ['User'],
  // Build-in builder to make http requests
  endpoints: (builder) => ({}),
});
