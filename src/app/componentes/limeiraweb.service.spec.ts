import { TestBed } from '@angular/core/testing';

import { LimeirawebService } from './limeiraweb.service';

describe('LimeirawebService', () => {
  let service: LimeirawebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LimeirawebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
