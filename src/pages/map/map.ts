import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import * as leaflet from 'leaflet';
import { MapProvider } from '../../providers/map/map';
import { MapMenuPage } from './map-menu/map-menu';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  lat: number = 8.4036527;
  lng: number = 49.0068901;

  markers = [
    leaflet.marker([8.4036527, 49.0068901], {
      icon: leaflet.icon({
        iconUrl: './assets/images/pin.png'
      }),
      title: 'Marker1'
    }),
    leaflet.marker([8.40366, 49.00691], {
      icon: leaflet.icon({
        iconUrl: './assets/images/pin.png'
      }),
      title: 'Marker2'
    })
  ];

  options = {
    layers: [
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 17,
    maxZoom: 19,
    minZoom: 11,
    center: leaflet.latLng(this.lng, this.lat)
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mapProvider: MapProvider,
    private popoverCtrl: PopoverController
  ) {
    this.lat = mapProvider.defaultLocation.lat;
    this.lng = mapProvider.defaultLocation.lng;
  }

  onShowMenu(event) {
    const popover = this.popoverCtrl.create(MapMenuPage);
    popover.present({ev: event});
  }
}
