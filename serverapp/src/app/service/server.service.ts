import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Status } from '../enum/status.enum';
import { CustomResponse } from '../interface/custom-response';
import { Server } from '../interface/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private readonly apiUrl = 'http://localhost:8088/servers';

  constructor(private http: HttpClient) { }

  /*getServers(): Observable<CustomResponse> {
    return this.http.get(`http://localhost:8088/servers`);
  }*/

  servers$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  save$ = (server: Server) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}`, server)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  ping$ = (ipAddress: string) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/ping/${ipAddress}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  filter$ = (status: Status, response: CustomResponse) => <Observable<CustomResponse>>
  new Observable<CustomResponse>(
    suscriber => {
      console.log(response);
      suscriber.next(
        status === Status.ALL ? { ...response, message: `Servers filtered by ${status} status`} :
        { 
          ...response, 
          message: response.data.servers
          .filter(server => server.status === status).length > 0 ? 
          `Servers filtered by ${status === Status.SERVER_UP ? 'SERVER UP' : 'SERVER DOWN'} status` : `No servers of ${status} found`,
          data: { servers: response.data.servers
            .filter(server => server.status === status)}
        }
      );
      suscriber.complete();
    }
  )
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  delete$ = (id: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  get$ = (id: number) => <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`${this.apiUrl}/${id}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(`An error occured - Error code: ${error.status}`);
  }
}
