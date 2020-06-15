import { TestBed } from '@angular/core/testing';

import { OpenDataApiService } from './open-data-api.service';

describe('OpenDataApiService', () => {
  let service: OpenDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
