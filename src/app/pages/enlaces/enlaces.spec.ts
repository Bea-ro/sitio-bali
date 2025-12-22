import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enlaces } from './enlaces';

describe('Enlaces', () => {
  let component: Enlaces;
  let fixture: ComponentFixture<Enlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enlaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enlaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
