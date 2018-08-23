import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsfeedEntry } from '../../model/newsfeed-entry.model';
import { AuthenticationProvider } from '../authentication/authentication';

/*
  Generated class for the NewsfeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsfeedProvider {
  private eventId;

  news: NewsfeedEntry[] = [];

  private newsSubject = new BehaviorSubject(this.news);
  news$ = this.newsSubject.asObservable();

  constructor(public http: HttpClient, private authenticationProvider: AuthenticationProvider) {
    this.eventId = authenticationProvider.eventId;
    this.fetchNews();

    setInterval(() => {
      this.fetchNews();
    }, 1000 * 60 * 5);
  }

  fetchNews() {
    // API call
    this.http.get('http://localhost:3000/api/' + this.eventId + '/newsfeed').subscribe((entries: NewsfeedEntry[]) => {
      // this workaround was necessary to avoid 'entry.date.getDate is not a function' error
      const newNews = entries.map(e => {
        e.date = new Date(e.date.valueOf());
        return e;
      });

      if (JSON.stringify(this.news) !== JSON.stringify(newNews)) {
        this.news = newNews;
        this.newsSubject.next(this.news);
      }
    });

  }
}
