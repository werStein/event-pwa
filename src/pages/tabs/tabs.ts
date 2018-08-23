import { Component } from '@angular/core';
import { NewsfeedPage } from '../newsfeed/newsfeed';
import { AgendaPage } from '../agenda/agenda';
import { MapPage } from '../map/map';
import { AuthenticationProvider } from '../../providers/authentication/authentication';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsfeedPage;
  tab2Root = AgendaPage;
  tab3Root = MapPage;

  constructor(private authenticationProvider: AuthenticationProvider) {

  }

  ionViewCanEnter(): boolean {
    return this.authenticationProvider.isAuthenticated();
  }
}
