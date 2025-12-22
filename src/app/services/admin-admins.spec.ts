import { TestBed } from '@angular/core/testing';

import { AdminAdmins } from './admin-admins';

describe('AdminAdmins', () => {
  let service: AdminAdmins;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAdmins);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
