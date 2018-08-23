import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaEditPage } from './agenda-edit';

@NgModule({
  declarations: [
    AgendaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaEditPage),
  ],
})
export class AgendaEditPageModule {}
