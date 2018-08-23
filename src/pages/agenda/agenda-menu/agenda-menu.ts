import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { AgendaEditPage } from '../agenda-edit/agenda-edit';
import { FeedbackPage } from '../../feedback/feedback';

/**
 * Generated class for the AgendaMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-menu',
  templateUrl: 'agenda-menu.html',
})
export class AgendaMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationProvider: AuthenticationProvider) {
  }

  onAddEntry() {
    this.navCtrl.push(AgendaEditPage);
  }

  onSendFeedback() {
    this.navCtrl.push(FeedbackPage);
  }

  onLogout() {

  }

}
