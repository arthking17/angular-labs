import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, startWith } from 'rxjs';
import { AppState } from './interface/app-state';
import { ServerService } from './service/server.service';
import { CustomResponse } from './interface/custom-response';
import { DataState } from './enum/data-state.enum';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { Status } from './enum/status.enum';
import { NgForm } from '@angular/forms';
import { Server } from './interface/server';
import { NotificationService } from './service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState = DataState;
  readonly Status = Status;
  private filterSubject = new BehaviorSubject<string>('');
  private dataSubject = new BehaviorSubject<CustomResponse>(null);
  private isLoading = new BehaviorSubject<boolean>(false);
  filterStatus$ = this.filterSubject.asObservable();
  isLoading$ = this.isLoading.asObservable();

  constructor(private serverService: ServerService, private notifierService: NotificationService) { }

  ngOnInit(): void {
    this.notifierService.onDefault('Welcome to Manage Server! 😊');
    this.appState$ = this.serverService.servers$
      .pipe(
        map(response => {
          this.dataSubject.next(response);
          this.notifierService.onDefault(response.message);
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          this.notifierService.onError(error);
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      )
  }

  pingServer(ipAddress : string): void {
    this.filterSubject.next(ipAddress);
    this.appState$ = this.serverService.ping$(ipAddress)
      .pipe(
        map(response => {
          const index = this.dataSubject.value.data.servers.findIndex(server =>
            server.id === response.data.server.id);

          this.dataSubject.value.data.servers[index] = response.data.server;
          this.filterSubject.next('');
          this.notifierService.onDefault(response.message);
          return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }
        }),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError((error: string) => {
          this.filterSubject.next('');
          this.notifierService.onError(error);
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      )
  }

  filterServers(status : Status): void {
    this.appState$ = this.serverService.filter$(status, this.dataSubject.value)
      .pipe(
        map(response => {
          this.notifierService.onInfo(response.message);
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError((error: string) => {
          this.notifierService.onError(error);
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      )
  }

  saveServer(serverForm : NgForm): void {
    this.isLoading.next(true);
    this.appState$ = this.serverService.save$(serverForm.value as Server)
      .pipe(
        map(response => {
          this.dataSubject.next(
            {...response, data: { servers: [response.data.server, ...this.dataSubject.value.data.servers]} }
          )
          document.getElementById('closeModal').click();
          this.isLoading.next(false);
          this.notifierService.onSuccess(response.message);
          return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }
        }),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError((error: string) => {
          this.isLoading.next(false);
          this.notifierService.onError(error);
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      )
  }

  deleteServer(server : Server): void {
    this.appState$ = this.serverService.delete$(server.id)
      .pipe(
        map(response => {
          this.dataSubject.next(
            { ...response, data: 
              { servers: this.dataSubject.value.data.servers.filter(s => s.id != server.id)}}
          )
          this.notifierService.onSuccess(response.message);
          return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }
        }),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError((error: string) => {
          this.notifierService.onError(error);
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      )
  }

  pingReport(): void {
    // window.print();
    this.notifierService.onInfo("Starting report downloaded...⌛");
    let dataType = 'application/vnd.ms-excel.sheet.sheet.macroEnabled.12';
    let tableSelect = document.getElementById('servers');
    let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    downloadLink.download = 'server-report.xls';
    downloadLink.click();
    document.body.removeChild(downloadLink);
    this.notifierService.onSuccess("Ping report downloaded!🔥");
  }
}
