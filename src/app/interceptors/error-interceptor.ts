import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AdminAdmins } from '../services/admin-admins';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const adminAdmins = inject(AdminAdmins);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        adminAdmins.setSessionExpired();
      }

      let message = 'Error inesperado';
      if (err.status === 0) {
        message = 'No se ha podido conectar con el servidor. Inténtalo más tarde.';
      } else if (err.error?.message) {
        message = err.error.message;
      }

      return throwError(() => ({
        ...err,
        message: message,
      }));
    })
  );
};
