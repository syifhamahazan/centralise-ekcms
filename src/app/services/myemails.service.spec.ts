import { TestBed } from '@angular/core/testing';

import { MyemailsService } from './myemails.service';

describe('MyemailsService', () => {
  let service: MyemailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyemailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
