import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {
  _isAuthenticated = true;
  eventId = 1;

  events = [];
  private eventsSubject = new BehaviorSubject(this.events);
  events$ = this.eventsSubject.asObservable();

  constructor(public http: HttpClient) {
    http.get('http://localhost:3000/api/events').subscribe((events: any[]) => {
      this.events = events;
      this.eventsSubject.next(this.events);
    });
  }

  isAdministrator() {
    return true;
  }

  isAuthenticated() {
    return this._isAuthenticated;
  }
}
