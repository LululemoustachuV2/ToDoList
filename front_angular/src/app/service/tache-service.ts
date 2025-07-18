import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { APIService } from './apiservice';
import { TacheModel } from '../model/tache-model';

@Injectable({
  providedIn: 'root',
})
export class TacheService {
  readonly ROOT_TACHE_URL: String = APIService.ROOT_URL;
  readonly PARAM_TACHE_ID: string = '_id';
  readonly PARAM_TACHE_TITLE: string = 'title';
  readonly PARAM_TACHE_DESCRIPTION: string = 'description';
  readonly PARAM_TACHE_COMPLETED: string = 'completed';
  readonly PARAM_TACHE_CRERATED_AT: string = 'createdAt';

  constructor(private apiService: APIService) {}

  getAllTache(): Observable<Array<TacheModel>> {
    let url = this.ROOT_TACHE_URL + '/tasks';
    return this.apiService.sendGetRequest<Array<TacheModel>>(url, null);
  }

  getTacheById(id: string): Observable<TacheModel> {
    let url = this.ROOT_TACHE_URL + '/tasks' + id;
    return this.apiService.sendGetRequest<TacheModel>(url, null);
  }

  deleteTache(id: string): Observable<TacheModel> {
    let url = this.ROOT_TACHE_URL + '/tasks' + id;
    return this.apiService.sendDeleteRequest<TacheModel>(url, null);
  }

  addTache(tm: TacheModel): Observable<TacheModel> {
    let url = this.ROOT_TACHE_URL + '/tasks';
    let params: HttpParams = new HttpParams()
      .append(this.PARAM_TACHE_TITLE, tm.title)
      .append(this.PARAM_TACHE_DESCRIPTION, tm.description)
      .append(this.PARAM_TACHE_COMPLETED, tm.completed)
      .append(this.PARAM_TACHE_CRERATED_AT, tm.createdAt.toISOString());
    return this.apiService.sendPostRequest<TacheModel>(url, params, null);
  }

  updateTache(tm: TacheModel, id: string): Observable<TacheModel> {
    let url = this.ROOT_TACHE_URL + '/tasks' + id;
    let params: HttpParams = new HttpParams()
      .append(this.PARAM_TACHE_ID, tm._id)
      .append(this.PARAM_TACHE_TITLE, tm.title)
      .append(this.PARAM_TACHE_DESCRIPTION, tm.description)
      .append(this.PARAM_TACHE_COMPLETED, tm.completed)
      .append(this.PARAM_TACHE_CRERATED_AT, tm.createdAt.toISOString());
    return this.apiService.sendPutRequest<TacheModel>(url, params, null);
  }
}
