import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcSten01 } from './CalcSten01';
import {IonicPage} from 'ionic-angular';


@IonicPage()

@NgModule({
  declarations: [
    CalcSten01,
  ],
  imports: [
    IonicPageModule.forChild(CalcSten01),
  ],
})
export class CalcSten01Module {}
 