import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: async () =>
      await import('./view/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tenant',
    loadComponent: async () =>
      await import('./view/tenant/tenant.page').then((m) => m.TenantPage),
  },
  {
    path: 'about-us',
    loadComponent: async () =>
      await import('./view/about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'hero',
    loadComponent: async () =>
      await import('./view/hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
