import type { HttpClient } from '@libs/clients';

export class ProductService {
  public constructor(
    private readonly client: HttpClient,
    private readonly basePath: string,
  ) {}

  public getAll() {
    return this.client.get<any>(this.basePath);
  }
}
