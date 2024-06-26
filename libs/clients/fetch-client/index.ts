import { createFetchClient } from './fetch-client';

const baseUrl = import.meta.env.VITE_BASE_API;

export const fetchClient = createFetchClient(baseUrl, {
  'X-Authorization': import.meta.env.VITE_PUBLIC_API,
});

export type { FetchClient } from './fetch-client';
