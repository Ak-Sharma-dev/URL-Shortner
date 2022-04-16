import { TestBed } from '@angular/core/testing';

import { GenerateURLShortnerService } from './generate-url-shortner.service';

describe('GenerateURLShortnerService', () => {
  let service: GenerateURLShortnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateURLShortnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
