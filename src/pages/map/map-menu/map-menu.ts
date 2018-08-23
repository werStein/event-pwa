import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../../feedback/feedback';

/**
 * Generated class for the MapMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map-menu',
  templateUrl: 'map-menu.html',
})
export class MapMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSendFeedback() {
    this.navCtrl.push(FeedbackPage);
  }

  onLogout() {

  }

}
