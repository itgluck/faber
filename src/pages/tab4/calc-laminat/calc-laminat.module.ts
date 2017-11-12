import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcLaminatPage } from './calc-laminat';

@NgModule({
  declarations: [
    CalcLaminatPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcLaminatPage),
  ],
})
export class CalcLaminatPageModule {}
