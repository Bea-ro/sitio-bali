import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndText } from './image-and-text';

describe('ImageAndText', () => {
  let component: ImageAndText;
  let fixture: ComponentFixture<ImageAndText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageAndText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAndText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
