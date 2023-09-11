import { TestBed } from '@angular/core/testing';

import { ApikeyInterceptorService } from './apikey-interceptor.service';

describe('ApikeyInterceptorService', () => {
  let service: ApikeyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApikeyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
