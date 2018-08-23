import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  PopoverController
} from 'ionic-angular';
import { NewsfeedProvider } from '../../providers/newsfeed/newsfeed';
import { NewsfeedEntry } from '../../model/newsfeed-entry.model';
import { NewsfeedMenuPage } from './newsfeed-menu/newsfeed-menu';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html'
})
export class NewsfeedPage {
  news: NewsfeedEntry[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsfeedProvider: NewsfeedProvider,
    private popoverCtrl: PopoverController,
    private authenticationProvider: AuthenticationProvider
  ) {
    newsfeedProvider.news$.subscribe((news: NewsfeedEntry[]) => {
      this.news = news;
    });
  }

  ionViewDidLoad() {}

  onRefresh(refresher) {
    setTimeout(() => {
      this.newsfeedProvider.fetchNews();
      refresher.complete();
    }, 2000);
  }

  onShowMenu(event) {
    const popover = this.popoverCtrl.create(NewsfeedMenuPage);
    popover.present({ev: event});
  }
}
