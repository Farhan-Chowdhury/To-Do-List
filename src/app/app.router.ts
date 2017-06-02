import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';

export const router: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lists' },
  { path: 'lists', component: AddListComponent, },
  { path: 'list/:id', component: ListDetailsComponent, },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
