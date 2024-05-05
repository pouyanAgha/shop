export function requestStringify(request: any): BodyInit {
  if (['number', 'string', 'boolean'].includes(typeof request)) return request;
  return JSON.stringify(request);
}
