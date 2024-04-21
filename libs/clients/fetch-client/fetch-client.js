/**
 *
 * @param {string} baseUrl
 * @param {HeadersInit | undefined} defaultHeaders
 */
export const createFetchClient = (baseUrl, defaultHeaders = {}) => {
  /**
   *
   * @param {string} url
   * @param {RequestInit | undefined} init
   */
  const fetchClient = (url, init = {}) => {
    const { method, headers, ...rest } = init;
    return fetch(baseUrl + url, {
      method: method ?? 'GET',
      headers: {
        ...defaultHeaders,
        ...(headers ?? {}),
      },
      ...rest,
    });
  };
  return fetchClient;
};
