import { fetchClient } from '@libs/clients';

import { ProductService } from './product-service';

export const productService = new ProductService(fetchClient, '/products');
