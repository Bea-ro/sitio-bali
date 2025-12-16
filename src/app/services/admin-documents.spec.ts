import { TestBed } from '@angular/core/testing';

import { AdminDocuments } from './admin-documents';

describe('AdminDocuments', () => {
  let service: AdminDocuments;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDocuments);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
