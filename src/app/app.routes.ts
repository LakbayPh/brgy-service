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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
