import { httpClient } from '@libs/clients';

import { ProductService } from './product-service';

export const productService = new ProductService(httpClient, '/products');
