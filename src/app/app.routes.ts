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
    path: 'news_and_announcement',
    loadComponent: async () =>
      await import('./view/news-and-announcement/news-and-announcement.component').then((m) => m.NewsAndAnnouncementComponent),
  },
  {
    path: 'events_calendar',
    loadComponent: async () =>
      await import('./view/events-calendar/events-calendar.component').then((m) => m.EventsCalendarComponent),
  },
  {
    path: 'footer',
    loadComponent: async () =>
      await import('./view/footer/footer.component').then((m) => m.FooterComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
