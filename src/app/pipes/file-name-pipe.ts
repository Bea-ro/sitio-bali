import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName',
})
export class FileNamePipe implements PipeTransform {
  transform(name: string): string {
    const lastCharacter = name.length - 4;
    return name.slice(0, lastCharacter);
  }
}
