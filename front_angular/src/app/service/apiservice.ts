import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  public static ROOT_URL: String = environment.apiUrl;
  public static DEFAULT_HEADER: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  public static FROM_HEADER: HttpHeaders = new HttpHeaders({
    //TODO: change this to the correct content type if needed
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  httpError(error: HttpErrorResponse) {
    let msg: string = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
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
    console.log(msg);
    return throwError(() => new Error(msg));
  }
  public sendGetRequest<T>(
    url: string,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    let httpOptions: Object = {
      observe: 'body',
      repsponseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .get<T>(url, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  public sendDeleteRequest<T>(
    url: string,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.DEFAULT_HEADER;
    }
    let httpOptions: Object = {
      observe: 'body',
      repsponseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .delete<T>(url, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  public sendPostRequest<T>(
    url: string,
    params: HttpParams,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.FROM_HEADER;
    }
    let httpOptions: Object = {
      observe: 'response',
      repsponseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .post<T>(url, params, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }

  public sendPutRequest<T>(
    url: string,
    params: HttpParams,
    headers: HttpHeaders | null
  ): Observable<T> {
    if (headers == null) {
      headers = APIService.FROM_HEADER;
    }
    let httpOptions: Object = {
      observe: 'body',
      repsponseType: 'json',
      headers: headers,
    };
    return this.httpClient
      .put<T>(url, params, httpOptions)
      .pipe(retry(1), catchError(this.httpError));
  }
  constructor(private httpClient: HttpClient) {}
}
