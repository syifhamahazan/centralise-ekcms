import { TestBed } from '@angular/core/testing';

import { SearchResService } from './search-res.service';

describe('SearchResService', () => {
  let service: SearchResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
