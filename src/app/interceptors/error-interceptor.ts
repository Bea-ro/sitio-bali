import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let message = 'Error inesperado';
      if (err.status === 0) {
        message = 'No se ha podido conectar con el servidor. Inténtalo más tarde.';
      } else if (err.error?.message) {
        message = err.error.message;
      }

      return throwError(() => message);
    })
  );
};
