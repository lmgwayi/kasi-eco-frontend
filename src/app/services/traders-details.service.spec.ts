import { TestBed } from '@angular/core/testing';

import { TradersDetailsService } from './traders-details.service';

describe('TradersDetailsService', () => {
  let service: TradersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
