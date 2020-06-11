import { Injectable, Inject } from '@angular/core';
import { Predio } from '../predio/models/predio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PredioService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) 
    {
      this.baseUrl = baseUrl;
    }

  post(predio: Predio): Observable<Predio> {
    return this.http.post<Predio>(this.baseUrl + 'api/Predio', predio)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Predio>('Registrar Productor', null))
        );
  }
  get(): Observable<Predio[]> {
    return this.http.get<Predio[]>(this.baseUrl + 'api/Predio')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Predio[]>('Consulta Predio', null))
        );
  }
}
