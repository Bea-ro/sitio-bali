import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    const originalDate = new Date(date);
    const shortDate = new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      timeZone: 'UTC',
    }).format(originalDate);

    return shortDate;
  }
}
