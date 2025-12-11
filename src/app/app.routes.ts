import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { AdminLogin } from './pages/admin-login/admin-login';
import { AdminPanel } from './pages/admin-panel/admin-panel';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    title: 'Bali Asociados · Asesoría empresas y autónomos',
    children: [
      {
        path: '',
        component: Home,
        title: 'Bali Asociados · Asesoría empresas y autónomos',
      },
      {
        path: 'servicios',
        loadComponent: () => import('./pages/servicios/servicios').then((c) => c.Servicios),
        title: 'Bali Asociados · Servicios asesoría y consultoría',
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./pages/nosotros/nosotros').then((c) => c.Nosotros),
        title: 'Bali Asociados · Expertos en empresas y autónomos',
      },
      {
        path: 'area-privada/:cliente',
        loadComponent: () => import('./pages/area-privada/area-privada').then((c) => c.AreaPrivada),
        title: 'Bali Asociados · Área Privada',
      },
      {
        path: 'noticias',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/noticias/noticias').then((c) => c.Noticias),
            title: 'Noticias Bali Asociados',
          },
          {
            path: ':slug',
            loadComponent: () => import('./pages/noticia/noticia').then((c) => c.Noticia),
            title: 'Noticia Bali Asociados',
          },
        ],
      },
      {
        path: 'politica-cookies',
        loadComponent: () =>
          import('./pages/politica-cookies/politica-cookies').then((c) => c.PoliticaCookies),
        title: 'Política de cookies | Bali Asociados',
      },
      {
        path: 'politica-privacidad',
        loadComponent: () =>
          import('./pages/politica-privacidad/politica-privacidad').then(
            (c) => c.PoliticaPrivacidad
          ),
        title: 'Política de privacidad | Bali Asociados',
      },
      {
        path: 'aviso-legal',
        loadComponent: () => import('./pages/aviso-legal/aviso-legal').then((c) => c.AvisoLegal),

        title: 'Aviso legal | Bali Asociados',
      },
    ],
  },
  {
    path: 'admin-login',
    component: AdminLogin,
    title: 'Bali Asociados · Acceso Administrador',
  },
  {
    path: 'admin-panel',
    component: AdminLayout,
    // canActivate: [AuthGuard],
    title: 'Panel administración | Bali Asociados',
    children: [
      {
        path: '',
        component: AdminPanel,
        title: 'Bali Asociados · Panel Administración',
      },
      {
        path: 'noticias',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/admin-panel/admin-noticias/admin-noticias').then(
                (c) => c.AdminNoticias
              ),
            title: 'Bali Asociados · Administrador Noticias',
          },
          {
            path: 'nueva',
            loadComponent: () =>
              import('./pages/admin-panel/admin-noticias/nueva-noticia/nueva-noticia').then(
                (c) => c.NuevaNoticia
              ),
            title: 'Bali Asociados · Nueva Noticia',
          },
          {
            path: 'editar/:id',
            loadComponent: () =>
              import('./pages/admin-panel/admin-noticias/nueva-noticia/nueva-noticia').then(
                (c) => c.NuevaNoticia
              ),
            title: 'Bali Asociados · Nueva Noticia',
          },
        ],
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/admin-panel/admin-clientes/admin-clientes').then((c) => c.AdminClientes),
        title: 'Bali Asociados · Administrador Clientes',
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/pagina-no-encontrada/pagina-no-encontrada').then((c) => c.PaginaNoEncontrada),
    title: 'Página no encontrada | Bali Asociados',
  },
];
