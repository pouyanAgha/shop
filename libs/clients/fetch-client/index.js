import { createFetchClient } from './fetch-client';

const baseUrl = import.meta.env.VITE_BASE_API;

export const fetchClient = createFetchClient(baseUrl, {});
