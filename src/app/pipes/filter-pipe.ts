import { Pipe, PipeTransform } from '@angular/core';
import { NoticiaExistente } from '../models/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    noticias: NoticiaExistente[] | null,
    selectedCategory: string
  ): NoticiaExistente[] | null | undefined {
    const noticiasFiltered = noticias?.filter(
      (noticia) => noticia.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    return noticias && selectedCategory ? noticiasFiltered : noticias;
  }
}
