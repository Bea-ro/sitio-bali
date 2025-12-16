import { TestBed } from '@angular/core/testing';

import { AdminClientes } from './admin-clientes';

describe('AdminClientes', () => {
  let service: AdminClientes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminClientes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
