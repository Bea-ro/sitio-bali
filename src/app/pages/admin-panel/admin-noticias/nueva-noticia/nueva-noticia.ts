import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticiaForm } from '../../../../models/models';
import { AdminNoticias } from '../../../../services/admin-noticias';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../../../core/services/get-noticias';
import { AdminCategories } from '../../../../services/admin-categories';
import { IconButton } from '../../../../shared/icon-button/icon-button';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nueva-noticia',
  imports: [ReactiveFormsModule, CommonModule, IconButton, EditorComponent],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  templateUrl: './nueva-noticia.html',
  styleUrl: './nueva-noticia.css',
})
export class NuevaNoticia implements OnInit {
  //ver params si hay id, y si lo hay, cambio título Añador nueva noticia en el HTML por Editar noticia, cargo los datos de la noticia en los campos del form y cambio el texto del botón Publicar por Guardar
  //cómo cargo los datos de la noticia

  public noticiaFields?: FormGroup<NoticiaForm>;
  public plusPath: string =
    'M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z';
  public init: EditorComponent['init'] = {
    height: 300,
    menubar: false,
    base_url: '/tinymce',
    suffix: '.min',
    placeholder: 'Introduce el texto de la noticia',
    plugins: ['lists link image table code help wordcount'],
  };
  public noticiaId: string = '';

  constructor(
    public adminNoticias: AdminNoticias,
    public getNoticias: GetNoticias,
    public adminCategories: AdminCategories,
    private route: ActivatedRoute
  ) {}
  public ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.noticiaId = params['id'];
        console.log(this.noticiaId);
        this.cargarNoticia();
      }
    });

    this.noticiaFields = new FormGroup<NoticiaForm>({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      text: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      newCategory: new FormControl('', {
        nonNullable: true,
      }),
      existingCategory: new FormControl('', {
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
    if (this.noticiaFields && this.noticiaFields.valid) {
      const noticiaSlug =
        this.noticiaFields?.value.title && this.generateSlug(this.noticiaFields.value.title);
      const noticiaCategory = this.noticiaFields?.value.newCategory
        ? this.noticiaFields?.value.newCategory
        : this.noticiaFields?.value.existingCategory;
      const newNoticia = {
        title: this.noticiaFields.value.title || '',
        text: this.noticiaFields.value.text || '',
        category: noticiaCategory || '',
        slug: noticiaSlug || '',
        //ver cómo conservar fecha original en el update
        date: new Intl.DateTimeFormat('es-ES', {
          dateStyle: 'medium',
        }).format(new Date()),
      };
      this.noticiaId
        ? this.adminNoticias.updateNoticia(this.noticiaId, newNoticia)
        : this.adminNoticias.createNoticia(newNoticia);
    }
    //this.noticiaCreated.emit()
  }

  public addCategory(category: string | undefined) {
    category && this.adminCategories.createCategory(category);
  }

  public cargarNoticia() {
    this.getNoticias.getNoticiaById(this.noticiaId).subscribe((noticia) => {
      console.log(this.noticiaFields);
      this.noticiaFields &&
        this.noticiaFields.patchValue({
          title: noticia.title,
          text: noticia.text,
          existingCategory: noticia.category,
        });
    });
    console.log(this.noticiaFields);
  }
}
