import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(
      `${environment.baseUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`,
      body
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.baseUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

  options(path: string) :Observable<any> {
    return this.http.options(`${environment.baseUrl}${path}`)
    .pipe(catchError(this.formatErrors))
  }

}