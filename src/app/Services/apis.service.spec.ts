import { TestBed } from '@angular/core/testing';

import { APIsService } from './apis.service';

describe('APIsService', () => {
  let service: APIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
