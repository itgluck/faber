import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServisePage } from './servise';

@NgModule({
  declarations: [
    ServisePage,
  ],
  imports: [
    IonicPageModule.forChild(ServisePage),
  ],
})
export class ServisePageModule {}
