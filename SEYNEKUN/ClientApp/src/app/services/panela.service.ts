import { Injectable, Inject } from '@angular/core';
import { Panela } from '../Produccion/models/panela';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class PanelaService {



  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) 
    {
      this.baseUrl = baseUrl;
    }

    get(): Observable<Panela[]> {
      return this.http.get<Panela[]>(this.baseUrl + 'api/Panela')
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Panela[]>('Consulta Panela', null))
          );
    }
    post(panela: Panela): Observable<Panela> {
      return this.http.post<Panela>(this.baseUrl + 'api/Panela', panela)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Panela>('Registrar Panela', null))
          );
    }

    /** DELETE: delete the hero from the server */
   delete (panela: Panela | string): Observable<Panela> {
    const id = typeof panela === 'string' ? panela : panela.idregistro;
    const url = `${'api/panela'}/${id}`;

    return this.http.delete<Panela>(url)
    .pipe(
      tap(_ => this.handleErrorService.log('datos eliminados')),
      catchError(this.handleErrorService.handleError<Panela>('Eliminar Produccion', null))
  );
  }

  



  }

