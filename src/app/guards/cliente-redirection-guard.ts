import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const clienteRedirectionGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const stored = localStorage.getItem('userStored');
  console.log(stored);
  if (!stored) return true;
  const { user } = JSON.parse(stored);
  if (!user.rol || user.rol !== 'cliente') return true;
  if (state.url === '/area-privada') {
    return router.createUrlTree(['/area-privada', user.id]);
  }
  return true;
};
