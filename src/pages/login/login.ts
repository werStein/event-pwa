import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  events = [];

  tabs = TabsPage;

  selectedEvent;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authenticationProvider: AuthenticationProvider, private loadingCtrl: LoadingController) {
    authenticationProvider.events$.subscribe(events => {
      this.events = events;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    const loader = this.loadingCtrl.create({
      content: "Lets see..."
    });
    loader.present();
    setTimeout(() => {
      this.authenticationProvider._isAuthenticated = true;
      loader.dismiss()
    }, 2000);
    setTimeout(() => {
      this.navCtrl.push(TabsPage).catch( () => {
        // handle access denial
      });
    }, 2300);
  }

}
