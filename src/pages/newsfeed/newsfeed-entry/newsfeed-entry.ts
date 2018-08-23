import { Component, Input } from '@angular/core';
import { AuthenticationProvider } from '../../../providers/authentication/authentication';
import { NavController } from '../../../../node_modules/ionic-angular';
import { NewsfeedEditPage } from '../newsfeed-edit/newsfeed-edit';
import { NewsfeedEntry } from '../../../model/newsfeed-entry.model';

/**
 * Generated class for the NewsfeedEntryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'newsfeed-entry',
  templateUrl: 'newsfeed-entry.html'
})
export class NewsfeedEntryComponent {
  @Input() entry: NewsfeedEntry;

  constructor(public authenticationProvider: AuthenticationProvider, private navCtrl: NavController) {
  }

  onEditEntry() {
    this.navCtrl.push(NewsfeedEditPage, {entry: this.entry})
  }

}
