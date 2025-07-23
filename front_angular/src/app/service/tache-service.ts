import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from './apiservice';
import { TacheModel } from '../model/tache-model';

// Service injectable à la racine, spécialisé dans la gestion des tâches via l'API
@Injectable({
  providedIn: 'root',
})
export class TacheService {
  // URL racine des tâches, récupérée depuis APIService
  readonly ROOT_TACHE_URL: String = APIService.ROOT_URL;

  // Constantes pour les noms des paramètres (non utilisées dans ce code, mais prêtes pour extensions)
  readonly PARAM_TACHE_ID: string = '_id';
  readonly PARAM_TACHE_TITLE: string = 'title';
  readonly PARAM_TACHE_DESCRIPTION: string = 'description';
  readonly PARAM_TACHE_COMPLETED: string = 'completed';
  readonly PARAM_TACHE_CRERATED_AT: string = 'createdAt';

  // Injection du service API générique
  constructor(private apiService: APIService) {}

  // Récupère la liste complète des tâches via un GET /tasks
  getAllTache(): Observable<Array<TacheModel>> {
    const url = this.ROOT_TACHE_URL + '/tasks';
    return this.apiService.sendGetRequest<Array<TacheModel>>(url, null);
  }

  // Récupère une tâche précise par son ID via GET /tasks/:id
  getTacheById(id: string): Observable<TacheModel> {
    const url = this.ROOT_TACHE_URL + '/tasks/' + id;
    return this.apiService.sendGetRequest<TacheModel>(url, null);
  }

  // Supprime une tâche par son ID via DELETE /tasks/:id
  deleteTache(id: string): Observable<TacheModel> {
    const url = this.ROOT_TACHE_URL + '/tasks/' + id;
    return this.apiService.sendDeleteRequest<TacheModel>(url, null);
  }

  // Ajoute une nouvelle tâche via POST /tasks, en envoyant l'objet TacheModel en JSON
  addTache(tm: TacheModel): Observable<TacheModel> {
    const url = this.ROOT_TACHE_URL + '/tasks';
    return this.apiService.sendPostRequest<TacheModel>(url, tm, null);
  }

  // Met à jour une tâche existante via PUT /tasks/:id avec l'objet TacheModel modifié
  updateTache(tm: TacheModel, id: string): Observable<TacheModel> {
    const url = this.ROOT_TACHE_URL + '/tasks/' + id;
    return this.apiService.sendPutRequest<TacheModel>(url, tm, null);
  }
}
