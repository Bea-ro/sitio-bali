import { TestBed } from '@angular/core/testing';

import { AdminNoticias } from './admin-noticias';

describe('AdminNoticias', () => {
  let service: AdminNoticias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNoticias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
