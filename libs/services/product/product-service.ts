import type { FetchClient } from '@libs/clients';

export class ProductService {
  public constructor(
    private readonly client: FetchClient,
    private readonly basePath: string,
  ) {}

  public getAll() {
    return this.client(this.basePath);
  }
}
