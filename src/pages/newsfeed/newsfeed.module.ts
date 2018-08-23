import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedPage } from './newsfeed';
import { NewsfeedEntryComponent } from './newsfeed-entry/newsfeed-entry';

@NgModule({
  declarations: [
    NewsfeedPage,
  ],
  imports: [
    NewsfeedEntryComponent,
    IonicPageModule.forChild(NewsfeedPage),
  ],
})
export class NewsfeedPageModule {}
