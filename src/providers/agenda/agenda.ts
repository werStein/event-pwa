import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MapProvider } from '../map/map';
import { AgendaEntry } from '../../model/agenda-entry.model';
import { AuthenticationProvider } from '../authentication/authentication';

/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaProvider {
  private eventId;
  entries: AgendaEntry[] = [];

  private entriesSubject = new BehaviorSubject(this.entries);
  entries$ = this.entriesSubject.asObservable();

  constructor(public http: HttpClient, private mapProvider: MapProvider, private authenticationProvider: AuthenticationProvider) {
    this.eventId = authenticationProvider.eventId;
    this.fetchEntries();

    setInterval(() => {
      this.fetchEntries();
    }, 1000 * 60 * 5);
  }

  fetchEntries() {
    this.http.get('http://localhost:3000/api/' + this.eventId + '/agenda').subscribe((entries: AgendaEntry[]) => {
      // this workaround was necessary to avoid 'entry.date.getDate is not a function' error
      const newEntries = entries.map(e => {
        e.date = new Date(e.date.valueOf());
        return e;
      });
      if (JSON.stringify(this.entries) !== JSON.stringify(newEntries)) {
        this.entries = newEntries;
        this.entriesSubject.next(this.entries);
      }
    });
  }
}
