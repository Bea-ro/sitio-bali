import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableNoticia } from './editable-noticia';

describe('EditableNoticia', () => {
  let component: EditableNoticia;
  let fixture: ComponentFixture<EditableNoticia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableNoticia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableNoticia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
