import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function existingEntryValidator<T>(
  getElementsFn: () => T[],
  field: keyof T,
  errorKey = 'existing'
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);

    const value = control.value.trim().toLowerCase();

    return of(
      getElementsFn().some((e) => {
        const fieldValue = e[field];
        return typeof fieldValue === 'string' && fieldValue.trim().toLowerCase() === value;
      })
    ).pipe(
      delay(100),
      map((exists) => (exists ? { [errorKey]: true } : null))
    );
  };
}
