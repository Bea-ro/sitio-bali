import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNoticia } from './nueva-noticia';

describe('NuevaNoticia', () => {
  let component: NuevaNoticia;
  let fixture: ComponentFixture<NuevaNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
