import { TestBed } from '@angular/core/testing';

import { Schecker } from './schecker';

describe('Schecker', () => {
  let service: Schecker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Schecker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
