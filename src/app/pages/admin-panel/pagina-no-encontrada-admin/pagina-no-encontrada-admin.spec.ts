import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoEncontradaAdmin } from './pagina-no-encontrada-admin';

describe('PaginaNoEncontradaAdmin', () => {
  let component: PaginaNoEncontradaAdmin;
  let fixture: ComponentFixture<PaginaNoEncontradaAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNoEncontradaAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNoEncontradaAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
