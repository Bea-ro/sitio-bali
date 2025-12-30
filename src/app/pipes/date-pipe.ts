import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(date: string | Date, options: 'short' | 'long' = 'short'): string {
    let parsedDate: Date;

    if (date instanceof Date) {
      parsedDate = date;
    } else {
      const normalized = date.replace('CEST', '+0200').replace('CET', '+0100');
      parsedDate = new Date(normalized);
    }

    if (isNaN(parsedDate.getTime())) {
      console.warn('Fecha no válida:', date);
      return '';
    }

    if (options === 'short') {
      // Formato: 28/12/2025
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(parsedDate);
    } else {
      // Formato: 28 dic 2025
      return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
      }).format(parsedDate);
    }
  }
}
