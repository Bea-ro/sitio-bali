import { TestBed } from '@angular/core/testing';

import { AdminNoticiasService } from './admin-noticias';

describe('AdminNoticias', () => {
  let service: AdminNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
