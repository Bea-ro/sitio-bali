import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceLinks } from './reference-links';

describe('ReferenceLinks', () => {
  let component: ReferenceLinks;
  let fixture: ComponentFixture<ReferenceLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
