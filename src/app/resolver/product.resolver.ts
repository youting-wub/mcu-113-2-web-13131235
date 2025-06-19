import { ResolveFn } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService);
  const id = route.paramMap.get('id')!;
  return productService.getById(id);
};
