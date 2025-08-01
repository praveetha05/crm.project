import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { crmGuard } from './crm-guard';

describe('crmGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => crmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
