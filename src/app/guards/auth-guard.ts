import { CanActivateFn, Router } from '@angular/router';
import { AdminAdmins } from '../services/admin-admins';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const adminAdmins = inject(AdminAdmins);
  const router = inject(Router);

  if (adminAdmins.isAuthenticated()) {
    return true;
  }

  return (route.data?.['rol'] || []).includes('admin')
    ? router.createUrlTree(['/admin-login'])
    : router.createUrlTree(['/area-privada']);
};
