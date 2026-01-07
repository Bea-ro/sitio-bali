import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { clienteRedirectionGuard } from './cliente-redirection-guard';

describe('clienteRedirectionGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => clienteRedirectionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
