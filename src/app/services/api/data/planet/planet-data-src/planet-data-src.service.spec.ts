import { TestBed } from '@angular/core/testing';

import { PlanetDataSrcService } from './planet-data-src.service';

describe('PlanetDataSrcService', () => {
  let service: PlanetDataSrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetDataSrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
