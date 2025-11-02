import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Bali Asociados · Asesoría empresas y autónomos',
    data: {
      description:
        'Asesoría fiscal, contable, laboral y mercantil y consultoría de empresas y autónomos',
    },
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios').then((c) => c.Servicios),
    title: 'Bali Asociados · Servicios asesoría y consultoría',
    data: {
      description:
        'Asesoría fiscal, contable, laboral y mercantil y consultoría de empresas y autónomos',
    },
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros').then((c) => c.Nosotros),
    title: 'Bali Asociados · Expertos en empresas y autónomos',
    data: {
      description:
        'Soluciones de señalización para comercios, edificios y eventos de todo tipo, así como letras corpóreas y materiales para rótulos. Conócenos.',
    },
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/noticias/noticias').then((c) => c.Noticias),
    title: 'Noticias Bali Asociados',
    data: {
      description: 'Noticias Bali Asociados',
    },
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then((c) => c.Contacto),
    title: 'Contacto Bali Asociados',
    data: {
      description: 'Contacto Bali Asociados, tu asesor contable y fiscal de confianza.',
    },
  },
  {
    path: 'politica-de-cookies',
    loadComponent: () =>
      import('./pages/politica-cookies/politica-cookies').then((c) => c.PoliticaCookies),
    title: 'Política de cookies | Bali Asociados',
  },
  {
    path: 'politica-de-privacidad',
    loadComponent: () =>
      import('./pages/politica-privacidad/politica-privacidad').then((c) => c.PoliticaPrivacidad),
    title: 'Política de privacidad | Bali Asociados',
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./pages/aviso-legal/aviso-legal').then((c) => c.AvisoLegal),

    title: 'Aviso legal | Bali Asociados',
  },
  {
    path: 'admin-panel',
    loadComponent: () => import('./pages/admin-panel/admin-panel').then((c) => c.AdminPanel),
    // canActivate: [authGuard],
    title: 'Panel administración | Bali Asociados',
  },
  {
    path: ':noticia',
    loadComponent: () => import('./pages/noticia/noticia').then((c) => c.Noticia),
    title: 'Actualidad | Bali Asociados',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/pagina-no-encontrada/pagina-no-encontrada').then((c) => c.PaginaNoEncontrada),
    title: 'Página no encontrada | Bali Asociados',
  },
];
