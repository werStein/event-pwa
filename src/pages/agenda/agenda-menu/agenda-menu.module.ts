import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaMenuPage } from './agenda-menu';

@NgModule({
  declarations: [
    AgendaMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaMenuPage),
  ],
})
export class AgendaMenuPageModule {}
