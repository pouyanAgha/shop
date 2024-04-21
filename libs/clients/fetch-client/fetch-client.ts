export const createFetchClient = (
  baseUrl: string,
  defaultHeaders?: HeadersInit,
) => {
  const fetchClient = (url: string, init?: RequestInit) => {
    const { method, headers, ...rest } = init ?? {};
    return fetch(baseUrl + url, {
      method: method ?? 'GET',
      headers: {
        ...(defaultHeaders ?? {}),
        ...(headers ?? {}),
      },
      ...rest,
    });
  };

  return fetchClient;
};
