import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { AgendaPage } from '../pages/agenda/agenda';
import { MapPage } from '../pages/map/map';
import { NewsfeedProvider } from '../providers/newsfeed/newsfeed';
import { AgendaProvider } from '../providers/agenda/agenda';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MapProvider } from '../providers/map/map';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { LoginPage } from '../pages/login/login';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AgendaEditPage } from '../pages/agenda/agenda-edit/agenda-edit';
import { NewsfeedEditPage } from '../pages/newsfeed/newsfeed-edit/newsfeed-edit';
import { NewsfeedMenuPage } from '../pages/newsfeed/newsfeed-menu/newsfeed-menu';
import { AgendaMenuPage } from '../pages/agenda/agenda-menu/agenda-menu';
import { NewsfeedEntryComponent } from '../pages/newsfeed/newsfeed-entry/newsfeed-entry';
import { MapMenuPage } from '../pages/map/map-menu/map-menu';
import { FeedbackPage } from '../pages/feedback/feedback';


@NgModule({
  declarations: [
    MyApp,
    NewsfeedPage,
    AgendaPage,
    MapPage,
    TabsPage,
    LoginPage,
    NewsfeedEntryComponent,
    AgendaEditPage,
    NewsfeedEditPage,
    NewsfeedMenuPage,
    AgendaMenuPage,
    MapMenuPage,
    FeedbackPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsfeedPage,
    AgendaPage,
    MapPage,
    TabsPage,
    LoginPage,
    AgendaEditPage,
    NewsfeedEditPage,
    NewsfeedMenuPage,
    AgendaMenuPage,
    MapMenuPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsfeedProvider,
    AgendaProvider,
    MapProvider,
    AuthenticationProvider
  ]
})
export class AppModule {}
