import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarCuenta } from './activar-cuenta';

describe('ActivarCuenta', () => {
  let component: ActivarCuenta;
  let fixture: ComponentFixture<ActivarCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivarCuenta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivarCuenta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
