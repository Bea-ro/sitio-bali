import { Pipe, PipeTransform } from '@angular/core';
import { INoticia } from '../models/models';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(noticias: INoticia[] | null, selectedCategory: string): INoticia[] | null | undefined {
    const noticiasFiltered = noticias?.filter(
      (noticia) => noticia.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    return noticias && selectedCategory ? noticiasFiltered : noticias;
  }
}
