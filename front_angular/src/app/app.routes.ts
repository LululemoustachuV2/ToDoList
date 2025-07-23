import { Routes } from '@angular/router';
import { Error404 } from './component/error404/error404';
import { ListeTache } from './component/liste-tache/liste-tache';
import { AjoutTache } from './component/ajout-tache/ajout-tache';
import { EditTache } from './component/edit-tache/edit-tache';

// Définition des routes principales de l'application
export const routes: Routes = [
  // Route racine redirige vers la liste des tâches
  { path: '', component: ListeTache },

  // Route pour afficher la liste des tâches
  { path: 'tasks', component: ListeTache },

  // Route pour la création d'une nouvelle tâche
  { path: 'new', component: AjoutTache },

  // Route pour modifier une tâche existante, identifiée par son id
  { path: 'task/:id', component: EditTache },

  // Route "catch-all" pour gérer les URLs non définies (page 404)
  { path: '**', pathMatch: 'full', component: Error404 },
];
