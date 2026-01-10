import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { clienteRedirectionGuard } from './guards/cliente-redirection-guard';

export const routes: Routes = [
  {
    path: 'admin-login',
    loadComponent: () => import('./pages/admin-login/admin-login').then((c) => c.AdminLogin),
    title: 'Bali Asociados · Acceso Administrador',
  },
  {
    path: 'activar-cuenta',
    loadComponent: () =>
      import('./pages/activar-cuenta/activar-cuenta').then((c) => c.ActivarCuenta),
    title: 'Bali Asociados · Activación de cuenta',
  },
  {
    path: 'reset-cuenta',
    loadComponent: () =>
      import('./pages/activar-cuenta/activar-cuenta').then((c) => c.ActivarCuenta),
    title: 'Bali Asociados · Activación de cuenta',
  },
  {
    path: 'admin-panel',
    loadComponent: () => import('./layouts/admin-layout/admin-layout').then((c) => c.AdminLayout),
    canActivate: [authGuard, roleGuard],
    data: { rol: ['admin', 'editor'] },
    title: 'Panel administración | Bali Asociados',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/admin-panel/admin-panel').then((c) => c.AdminPanel),
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
        path: 'categorias',
        loadComponent: () =>
          import('./pages/admin-panel/admin-categorias/admin-categorias').then(
            (c) => c.AdminCategorias
          ),
        title: 'Bali Asociados · Administrador Categorías',
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./pages/admin-panel/admin-clientes/admin-clientes').then((c) => c.AdminClientes),
        title: 'Bali Asociados · Administrador Clientes',
      },
      {
        path: 'admins',
        loadComponent: () => import('./pages/admin-panel/admins/admins').then((c) => c.Admins),
        title: 'Bali Asociados · Administradores',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/admin-panel/pagina-no-encontrada-admin/pagina-no-encontrada-admin').then(
            (c) => c.PaginaNoEncontradaAdmin
          ),
        title: 'Página no encontrada | Bali Asociados',
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout').then((c) => c.PublicLayout),
    title: 'Bali Asociados · Asesoría empresas y autónomos',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
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
        path: 'area-privada',
        canActivateChild: [clienteRedirectionGuard],
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/area-privada/area-privada').then((c) => c.AreaPrivada),
            title: 'Bali Asociados · Área Privada',
          },
          {
            path: ':id',
            loadComponent: () => import('./pages/cliente/cliente').then((c) => c.Cliente),
            canActivate: [authGuard],
            data: { rol: ['cliente'] },
            title: 'Bali Asociados · Área Cliente',
          },
        ],
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
        path: 'enlaces-de-interes',
        loadComponent: () => import('./pages/enlaces/enlaces').then((c) => c.Enlaces),
        title: 'Enlaces de interés · Bali Asociados',
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
      {
        path: '**',
        loadComponent: () =>
          import('./pages/pagina-no-encontrada/pagina-no-encontrada').then(
            (c) => c.PaginaNoEncontrada
          ),
        title: 'Página no encontrada | Bali Asociados',
      },
    ],
  },
];
