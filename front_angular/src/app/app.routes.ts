import { Routes } from '@angular/router';
import { Error404 } from './component/error404/error404';
import { ListeTache } from './component/liste-tache/liste-tache';
import { AjoutTache } from './component/ajout-tache/ajout-tache';
import { EditTache } from './component/edit-tache/edit-tache';

export const routes: Routes = [
  { path: '', component: ListeTache },
  { path: 'tasks', component: ListeTache },

  { path: 'new', component: AjoutTache },

  { path: 'task/:id', component: EditTache },

  { path: '**', pathMatch: 'full', component: Error404 },
];
