import { fetchClient } from '../fetch-client';
import { HttpClient } from './http-client';

export const httpClient = new HttpClient(fetchClient);

export type { HttpClient } from './http-client';
