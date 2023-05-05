import { TestBed } from '@angular/core/testing';

import { CathegoryProductService } from './cathegory-product.service';

describe('CathegoryProductService', () => {
  let service: CathegoryProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CathegoryProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
