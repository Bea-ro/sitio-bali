import { TestBed } from '@angular/core/testing';

import { AdminClientesService } from './admin-clientes';

describe('AdminClientes', () => {
  let service: AdminClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
