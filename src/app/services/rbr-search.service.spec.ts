import { TestBed } from '@angular/core/testing';

import { RbrSearchService } from './rbr-search.service';

describe('RbrSearchService', () => {
  let service: RbrSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RbrSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
