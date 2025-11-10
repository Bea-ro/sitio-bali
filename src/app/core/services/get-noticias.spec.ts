import { TestBed } from '@angular/core/testing';

import { GetNoticias } from './get-noticias';

describe('GetNoticias', () => {
  let service: GetNoticias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNoticias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
