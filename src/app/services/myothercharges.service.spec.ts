import { TestBed } from '@angular/core/testing';

import { MyotherchargesService } from './myothercharges.service';

describe('MyotherchargesService', () => {
  let service: MyotherchargesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyotherchargesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
