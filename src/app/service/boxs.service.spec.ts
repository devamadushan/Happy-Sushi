import { TestBed } from '@angular/core/testing';

import { BoxsService } from './boxs.service';

describe('BoxsService', () => {
  let service: BoxsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
