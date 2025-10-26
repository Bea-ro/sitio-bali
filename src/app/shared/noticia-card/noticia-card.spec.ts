import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCard } from './noticia-card';

describe('NoticiaCard', () => {
  let component: NoticiaCard;
  let fixture: ComponentFixture<NoticiaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
