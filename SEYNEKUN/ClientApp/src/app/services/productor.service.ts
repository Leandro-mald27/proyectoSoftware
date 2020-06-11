import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Productor } from '../Productor/models/productor';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {



  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) 
    {
      this.baseUrl = baseUrl;
    }

    get(): Observable<Productor[]> {
      return this.http.get<Productor[]>(this.baseUrl + 'api/Productor')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Productor[]>('Consulta Productor', null))
          );
    }
    post(productor: Productor): Observable<Productor> {
      return this.http.post<Productor>(this.baseUrl + 'api/Productor', productor)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Productor>('Registrar Productor', null))
          );
    }

  }
