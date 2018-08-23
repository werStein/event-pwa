import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { NewsfeedEditPage } from '../newsfeed-edit/newsfeed-edit';
import { FeedbackPage } from '../../feedback/feedback';

/**
 * Generated class for the NewsfeedMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed-menu',
  templateUrl: 'newsfeed-menu.html'
})
export class NewsfeedMenuPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authenticationProvider: AuthenticationProvider
  ) {}

  onAddEntry() {
    this.navCtrl.push(NewsfeedEditPage);
  }

  onSendFeedback() {
    this.navCtrl.push(FeedbackPage);
  }

  onLogout() {}
}
