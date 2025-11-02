import { TestBed } from '@angular/core/testing';

import { GetNoticia } from './get-noticia';

describe('GetNoticia', () => {
  let service: GetNoticia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNoticia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
