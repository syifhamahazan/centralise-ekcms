import { TestBed } from '@angular/core/testing';

import { AdvSearchService } from './adv-search.service';

describe('AdvSearchService', () => {
  let service: AdvSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
