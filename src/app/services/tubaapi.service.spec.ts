import { TestBed } from '@angular/core/testing';

import { TubaapiService } from './tubaapi.service';

describe('TubaapiService', () => {
  let service: TubaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
