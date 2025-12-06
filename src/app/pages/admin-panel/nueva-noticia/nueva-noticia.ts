import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticiaForm } from '../../../models/models';
import { AdminNoticias } from '../../../services/admin-noticias';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GetNoticias } from '../../../core/services/get-noticias';
import { AdminCategories } from '../../../services/admin-categories';
import { IconButton } from '../../../shared/icon-button/icon-button';

@Component({
  selector: 'app-nueva-noticia',
  imports: [ReactiveFormsModule, CommonModule, IconButton],
  templateUrl: './nueva-noticia.html',
  styleUrl: './nueva-noticia.css',
})
export class NuevaNoticia implements OnInit {
  public noticiaFields?: FormGroup<NoticiaForm>;
  public categories$?: Observable<string[]>;
  public plusPath: string =
    'M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z';
  public ngOnInit() {
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

    this.categories$ = this.getNoticias.getCategories();
  }

  constructor(
    private adminNoticias: AdminNoticias,
    private getNoticias: GetNoticias,
    private adminCategories: AdminCategories
  ) {}

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
        date: new Intl.DateTimeFormat('es-ES', {
          dateStyle: 'medium',
        }).format(new Date()),
      };
      this.adminNoticias.createNoticia(newNoticia);
    }
    //this.noticiaCreated.emit()
  }

  public addCategory(category: string | undefined) {
    category && this.adminCategories.createCategory(category);
  }
}
