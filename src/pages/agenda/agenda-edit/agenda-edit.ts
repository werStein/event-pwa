import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { AgendaEntry } from '../../../model/agenda-entry.model';

/**
 * Generated class for the AgendaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-edit',
  templateUrl: 'agenda-edit.html',
})
export class AgendaEditPage {
  entry: AgendaEntry;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationProvider: AuthenticationProvider) {
    this.entry = navParams.data.entry || null;
  }

  ionViewCanEnter() {
    return this.authenticationProvider.isAdministrator();
  }

}
