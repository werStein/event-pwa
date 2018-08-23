import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { NewsfeedEntry } from '../../../model/newsfeed-entry.model';

/**
 * Generated class for the NewsfeedEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed-edit',
  templateUrl: 'newsfeed-edit.html',
})
export class NewsfeedEditPage {
  entry: NewsfeedEntry

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationProvider: AuthenticationProvider) {
    this.entry = navParams.data.entry || null;
  }

  ionViewCanEnter() {
    return this.authenticationProvider.isAdministrator();
  }

}
