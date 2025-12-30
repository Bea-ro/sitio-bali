import { Pipe, PipeTransform } from '@angular/core';
import { INoticia } from '../models/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    noticias: INoticia[] | null,
    selectedCategory: string | undefined
  ): INoticia[] | null | undefined {
    if (!noticias) return null;

    if (!selectedCategory) {
      return noticias;
    }

    return noticias.filter(
      (noticia) => noticia.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }
}
