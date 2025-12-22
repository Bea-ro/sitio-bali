import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAdmin } from './nuevo-admin';

describe('NuevoAdmin', () => {
  let component: NuevoAdmin;
  let fixture: ComponentFixture<NuevoAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
