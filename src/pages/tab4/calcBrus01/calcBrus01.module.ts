import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcBrus01 } from './calcBrus01';
import {IonicPage} from 'ionic-angular';


@IonicPage()

@NgModule({
  declarations: [
    CalcBrus01,
  ],
  imports: [
    IonicPageModule.forChild(CalcBrus01),
  ],
})
export class CalcBrus01Module {}
 