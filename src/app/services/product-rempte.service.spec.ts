import { TestBed } from '@angular/core/testing';

import { ProductRempteService } from './product-rempte.service';

describe('ProductRempteService', () => {
  let service: ProductRempteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRempteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
