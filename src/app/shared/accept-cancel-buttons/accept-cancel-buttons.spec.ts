import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCancelButtons } from './accept-cancel-buttons';

describe('AcceptCancelButtons', () => {
  let component: AcceptCancelButtons;
  let fixture: ComponentFixture<AcceptCancelButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptCancelButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptCancelButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
