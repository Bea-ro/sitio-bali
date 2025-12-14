import { Pipe, PipeTransform } from '@angular/core';
import { Category, NoticiaExistente } from '../models/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    noticias: NoticiaExistente[] | null,
    selectedCategory: Category | undefined
  ): NoticiaExistente[] | null | undefined {
    if (!noticias) return null;

    if (!selectedCategory) {
      return noticias;
    }

    return noticias.filter(
      (noticia) => noticia.category.toLowerCase() === selectedCategory.category.toLowerCase()
    );
  }
}
