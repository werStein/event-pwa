import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedEditPage } from './newsfeed-edit';

@NgModule({
  declarations: [
    NewsfeedEditPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedEditPage),
  ],
})
export class NewsfeedEditPageModule {}
