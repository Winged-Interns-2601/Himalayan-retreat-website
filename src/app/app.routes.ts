import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
  },

  {
    path: 'stay',
    loadComponent: () =>
      import('./pages/stay/stay').then(m => m.Stay),
  },

  {
    path: 'experiences',
    loadComponent: () =>
      import('./pages/experiences/experiences').then(m => m.Experiences),
  },

  {
    path: 'journal',
    loadComponent: () =>
      import('./pages/journal/journal').then(m => m.Journal),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact),
  },

  // ================= Gallery =================

  {
    path: 'gallery',
    loadComponent: () =>
      import('./pages/gallery/gallery').then(m => m.Gallery),
  },
{
  path: 'book',
  loadComponent: () =>
    import('./pages/book/book')
      .then(m => m.Book)
},
  // ================= Fallback =================

  {
    path: '**',
    redirectTo: '',
  },
];