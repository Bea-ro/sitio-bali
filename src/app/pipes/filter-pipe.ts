import { Pipe, PipeTransform } from '@angular/core';
import { NoticiaExistente } from '../models/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    noticias: NoticiaExistente[] | null,
    selectedCategory: string | undefined
  ): NoticiaExistente[] | null | undefined {
    if (!noticias) return null;

    if (!selectedCategory) {
      return noticias;
    }

    return noticias.filter(
      (noticia) => noticia.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
}
