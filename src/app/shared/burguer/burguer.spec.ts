import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burguer } from './burguer';

describe('Burguer', () => {
  let component: Burguer;
  let fixture: ComponentFixture<Burguer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Burguer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burguer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
