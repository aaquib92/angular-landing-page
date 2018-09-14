import { TestBed, inject } from '@angular/core/testing';

import { HfService } from './hf.service';

describe('HfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HfService]
    });
  });

  it('should be created', inject([HfService], (service: HfService) => {
    expect(service).toBeTruthy();
  }));
});
