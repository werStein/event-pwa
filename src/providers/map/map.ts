import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationProvider } from '../authentication/authentication';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {
  private eventId;

  defaultLocation: {lat, lng};
  bars = [];
  restaurants = [];
  cafes = [];
  superMarkets = [];

  private pathSubject = new BehaviorSubject(null);
  path$ = this.pathSubject.asObservable();

  constructor(public http: HttpClient, private authenticationProvider: AuthenticationProvider) {
    this.eventId = authenticationProvider.eventId;
    // load default location and other properties via api call
    this.fetchEntries();
  }

  fetchEntries() {
    // api call goes here
    const defaultLocation = {
      lat: 8.4036527,
      lng: 49.0068901
    };

    const markers = {
      bars: [
        {title: 'bar1',
        lat: 0,
        long: 1},
        {title: 'bar2',
        lat: 0,
        long: 1},
        {title: 'bar3',
        lat: 0,
        long: 1}
      ],
      restaurants: [
        {title: 'food1',
        lat: 0,
        long: 1},
        {title: 'food2',
        lat: 0,
        long: 1},
        {title: 'food3',
        lat: 0,
        long: 1}
      ],
      cafes: [
        {title: 'cafe1',
        lat: 0,
        long: 1},
        {title: 'cafe2',
        lat: 0,
        long: 1},
        {title: 'cafe3',
        lat: 0,
        long: 1}
      ],
      superMarkets: [
        {title: 'market1',
        lat: 0,
        long: 1},
        {title: 'market2',
        lat: 0,
        long: 1},
        {title: 'market3',
        lat: 0,
        long: 1}
      ],
    };

    this.defaultLocation = defaultLocation;

    this.bars = markers.bars;
    this.restaurants = markers.restaurants;
    this.cafes = markers.cafes;
    this.superMarkets = markers.superMarkets;

  }

  setPath() {

  }

}
