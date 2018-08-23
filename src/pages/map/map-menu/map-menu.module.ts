import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapMenuPage } from './map-menu';

@NgModule({
  declarations: [
    MapMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MapMenuPage),
  ],
})
export class MapMenuPageModule {}
