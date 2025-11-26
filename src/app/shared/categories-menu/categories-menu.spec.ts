import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMenu } from './categories-menu';

describe('CategoriesMenu', () => {
  let component: CategoriesMenu;
  let fixture: ComponentFixture<CategoriesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
