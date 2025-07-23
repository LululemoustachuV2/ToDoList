import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

// Service injectable à la racine de l'application Angular
@Injectable({
  providedIn: 'root',
})
export class APIService {
  // URL racine de l'API, récupérée depuis le fichier d'environnement
  public static ROOT_URL: String = environment.apiUrl;

  // En-têtes HTTP par défaut : JSON content type
  public static DEFAULT_HEADER: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Gestion centralisée des erreurs HTTP
  // Prend une erreur HTTP et renvoie un Observable qui émet une erreur
  httpError(error: HttpErrorResponse) {
    let msg: string = '';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client ou réseau
      msg = error.error.message;
    } else {
      // Erreur côté serveur, on construit un message détaillé
      msg =
        'Status' +
        error.status +
        '\n' +
        'Message' +
        error.message +
        '\n' +
        'Détails' +
        error.error;
    }
    console.log(msg); // Log dans la console pour debug
    return throwError(() => new Error(msg)); // Propagation de l'erreur en Observable
  }

  // Méthode générique pour faire une requête GET
  // url : endpoint complet ou relatif
  // headers : entêtes HTTP optionnels (sinon valeurs par défaut)
  public sendGetRequest<T>(
    url: string,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    const httpOptions: Object = {
      observe: 'body', // on s'intéresse au corps de la réponse
      responseType: 'json', // on attend un JSON
      headers: headers,
    };
    return this.httpClient.get<T>(url, httpOptions).pipe(
      retry(1), // retente 1 fois en cas d'échec temporaire
      catchError(this.httpError) // gère les erreurs avec la méthode dédiée
    );
  }

  // Méthode générique pour une requête DELETE
  public sendDeleteRequest<T>(
    url: string,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    const httpOptions: Object = {
      observe: 'body',
      responseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .delete<T>(url, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  // Méthode générique pour une requête POST (création de ressource)
  // params : données envoyées en JSON dans le corps
  public sendPostRequest<T>(
    url: string,
    params: any,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    const httpOptions: Object = {
      observe: 'body',
      responseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .post<T>(url, params, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  // Méthode générique pour une requête PUT (mise à jour de ressource)
  // params : données envoyées en JSON dans le corps
  public sendPutRequest<T>(
    url: string,
    params: any,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    const httpOptions: Object = {
      observe: 'body',
      responseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .put<T>(url, params, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  // Injection du HttpClient d'Angular pour faire les requêtes HTTP
  constructor(private httpClient: HttpClient) {}
}
