import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const stored = localStorage.getItem('userStored');
  if (!stored) return false;

  return route.data['rol'].includes(JSON.parse(stored).user.rol)
    ? true
    : route.data['rol'].includes('admin')
    ? router.createUrlTree(['/admin-login'])
    : router.createUrlTree(['/area-privada']);
};
