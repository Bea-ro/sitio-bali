import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCard } from './number-card';

describe('NumberCard', () => {
  let component: NumberCard;
  let fixture: ComponentFixture<NumberCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
