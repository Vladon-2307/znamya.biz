import { Routes } from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', loadComponent: () => import('./pages/home.page/home.page.component').then((x) => x.HomePageComponent)},
  { path: 'collection', children: [
      {path: '', loadComponent: () => import('./pages/collection.page/collection.page.component').then((x) => x.CollectionPageComponent)},
      {path: 'item', loadComponent: () => import('./pages/collection-item.page/collection-item.page.component').then((x) => x.CollectionItemPageComponent)}
    ]},
  { path: 'about-company', loadComponent: () => import('./pages/about-company.page/about-company.page.component').then((x) => x.AboutCompanyPageComponent)},
  { path: 'contacts', loadComponent: () => import('./pages/contacts.page/contacts.page.component').then((x) => x.ContactsPageComponent)},
  { path: 'vacancy', loadComponent: () => import('./pages/vacancy.page/vacancy.page.component').then((x) => x.VacancyPageComponent)},
  { path: 'shareholder', loadComponent: () => import('./pages/shareholder.page/shareholder.page.component').then((x) => x.ShareholderPageComponent)},
  { path: 'documents', loadComponent: () => import('./pages/documents.page/documents.page.component').then((x) => x.DocumentsPageComponent)},
  { path: '**', component: NotFoundComponent }
];

