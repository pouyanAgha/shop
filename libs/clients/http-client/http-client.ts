import type { FetchClient } from '../fetch-client';
import { requestStringify } from './request-stringify';

export class HttpClient {
  public constructor(private readonly client: FetchClient) {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.patch = this.patch.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  public get<Res>(endpoint: string, requestInit?: RequestInit) {
    return this.client(endpoint, {
      ...(requestInit ?? {}),
      method: 'GET',
    }) as Promise<Res>;
  }

  public post<Req, Res>(
    endpoint: string,
    request: Req,
    requestInit?: RequestInit,
  ) {
    return this.client(endpoint, {
      ...(requestInit ?? {}),
      method: 'POST',
      body: requestStringify(request),
    }) as Promise<Res>;
  }

  public put<Req, Res>(
    endpoint: string,
    request: Req,
    requestInit?: RequestInit,
  ) {
    return this.client(endpoint, {
      ...(requestInit ?? {}),
      method: 'PUT',
      body: requestStringify(request),
    }) as Promise<Res>;
  }

  public patch<Req, Res>(
    endpoint: string,
    request: Req,
    requestInit?: RequestInit,
  ) {
    return this.client(endpoint, {
      ...(requestInit ?? {}),
      method: 'PATCH',
      body: requestStringify(request),
    }) as Promise<Res>;
  }

  public delete<Res>(endpoint: string, requestInit?: RequestInit) {
    return this.client(endpoint, {
      ...(requestInit ?? {}),
      method: 'DELETE',
    }) as Promise<Res>;
  }
}
