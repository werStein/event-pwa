import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  PopoverController
} from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { AgendaEntry } from '../../model/agenda-entry.model';
import { AgendaMenuPage } from './agenda-menu/agenda-menu';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AgendaEditPage } from './agenda-edit/agenda-edit';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {
  agendaGroupings = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private agendaProvider: AgendaProvider,
    private altertCtrl: AlertController,
    public popoverCtrl: PopoverController,
    public authenticationProvider: AuthenticationProvider
  ) {
    agendaProvider.entries$.subscribe((entries: AgendaEntry[]) => {
      const agendaGroupings = [];
      let currentDate = -1;

      for (let entry of entries) {
        if (entry.date.getDate() === currentDate) {
          agendaGroupings[agendaGroupings.length - 1].entries.push(entry);
        } else {
          let newDate = '';
          const now = new Date();
          const tomorrow = new Date(now.valueOf() + 24 * 60 * 60 * 1000);

          if (
            entry.date.getDate() === now.getDate() &&
            entry.date.getMonth() === now.getMonth() &&
            entry.date.getFullYear() === now.getFullYear()
          ) {
            newDate = 'Today';
          } else if (
            entry.date.getDate() === tomorrow.getDate() &&
            entry.date.getMonth() === tomorrow.getMonth() &&
            entry.date.getFullYear() === tomorrow.getFullYear()
          ) {
            newDate = 'Tomorrow';
          } else {
            if (entry.date.getDate() < 10) {
              newDate = '0';
            }
            newDate += entry.date.getDate() + '.';
            if (entry.date.getMonth() < 10) {
              newDate += '0';
            }
            newDate += entry.date.getMonth() + '.' + entry.date.getFullYear();
          }

          agendaGroupings.push({
            header: newDate,
            entries: [entry]
          });
          currentDate = entry.date.getDate();
        }
      }

      this.agendaGroupings = agendaGroupings;
    });
  }

  ionViewDidLoad() {}

  onRefresh(refresher) {
    setTimeout(() => {
      this.agendaProvider.fetchEntries();
      refresher.complete();
    }, 2000);
  }

  onShowInformation(entry: AgendaEntry) {
    const alert = this.altertCtrl.create({
      subTitle: entry.title,
      message: entry.description || '',
      buttons: ['Ok']
    });
    alert.present();
  }

  onShowMenu(event) {
    const popover = this.popoverCtrl.create(AgendaMenuPage);
    popover.present({ev: event});
  }

  onEditEntry(entry: AgendaEntry) {
    this.navCtrl.push(AgendaEditPage, {entry: entry});
  }
}
