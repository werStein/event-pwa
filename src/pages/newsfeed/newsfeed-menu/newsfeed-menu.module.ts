import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedMenuPage } from './newsfeed-menu';

@NgModule({
  declarations: [
    NewsfeedMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedMenuPage),
  ],
})
export class NewsfeedMenuPageModule {}
