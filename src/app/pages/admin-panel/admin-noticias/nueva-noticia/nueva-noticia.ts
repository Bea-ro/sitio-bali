import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticiaEditada, NoticiaForm, NoticiaNueva } from '../../../../models/models';
import { AdminNoticiasService } from '../../../../services/admin-noticias';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../../../core/services/get-noticias';
import { AdminCategories } from '../../../../services/admin-categories';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { existingEntryValidator } from '../../../../validators/existing.validator';
import { ErrorMessage } from '../../../../shared/error-message/error-message';

@Component({
  selector: 'app-nueva-noticia',
  imports: [ReactiveFormsModule, CommonModule, EditorComponent, ErrorMessage],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  templateUrl: './nueva-noticia.html',
  styleUrl: './nueva-noticia.css',
})
export class NuevaNoticia implements OnInit {
  public noticiaFields!: FormGroup<NoticiaForm>;
  public init: EditorComponent['init'] = {
    height: 500,
    menubar: false,
    base_url: '/tinymce',
    suffix: '.min',
    placeholder: 'Introduce el texto de la noticia',
    // plugins: ['lists link image table code help wordcount'],
  };
  public noticiaId: string = '';

  constructor(
    public adminNoticias: AdminNoticiasService,
    public getNoticias: GetNoticias,
    public adminCategories: AdminCategories,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  public ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.noticiaId = id;
        this.cargarNoticia(this.noticiaId);
      }
    });

    this.noticiaFields = new FormGroup<NoticiaForm>({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
        asyncValidators: [
          existingEntryValidator(() => this.adminNoticias.noticias(), 'title', 'existingEntry'),
        ],
      }),
      text: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      newCategory: new FormControl('', {
        nonNullable: true,
      }),
      existingCategory: new FormControl('General', {
        nonNullable: true,
      }),
    });

    this.adminCategories.getCategories();
  }

  public generateSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .normalize('NFD') // elimina tildes

      .replace(/[\u0300-\u036f]/g, '') // elimina diacríticos
      .replace(/[^a-z0-9\s-]/g, '') // elimina caracteres no válidos
      .replace(/\s+/g, '-') // reemplaza espacios por guiones
      .replace(/-+/g, '-'); // elimina guiones repetidos
  }

  public onSubmit() {
    console.log(this.noticiaFields.get('title'));
    if (this.noticiaFields && this.noticiaFields.valid) {
      const noticiaSlug = this.generateSlug(this.noticiaFields.getRawValue().title);

      const noticiaCategory = this.noticiaFields.getRawValue().newCategory
        ? this.noticiaFields.getRawValue().newCategory
        : this.noticiaFields.getRawValue().existingCategory;

      this.noticiaFields.getRawValue().newCategory &&
        this.addCategory(this.noticiaFields.getRawValue().newCategory);

      if (this.noticiaId) {
        const editedNoticia: NoticiaEditada = {
          title: this.noticiaFields.getRawValue().title,
          text: this.noticiaFields.getRawValue().text,
          category: noticiaCategory || '',
          slug: noticiaSlug,
        };
        this.adminNoticias.updateNoticia(this.noticiaId, editedNoticia);
      } else {
        const newNoticia: NoticiaNueva = {
          title: this.noticiaFields.getRawValue().title,
          text: this.noticiaFields.getRawValue().text,
          category: noticiaCategory || '',
          slug: noticiaSlug,
          date: new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' }).format(new Date()),
        };
        this.adminNoticias.createNoticia(newNoticia);
      }
      this.router.navigateByUrl('/admin-panel/noticias');
    }
  }

  private addCategory(category: string | undefined) {
    category && this.adminCategories.createCategory(category);
  }

  public cargarNoticia(noticiaId: string) {
    this.getNoticias.getNoticiaById(noticiaId).subscribe((noticia) => {
      this.noticiaFields &&
        this.noticiaFields.patchValue({
          title: noticia.title,
          text: noticia.text,
          existingCategory: noticia.category,
        });
    });
  }
}
