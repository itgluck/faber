import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab4',
  templateUrl: 'tab4.html',
})
export class Tab4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab4Page');
  }
  goCalcRoom() { //Комната простая 01
    this.navCtrl.push('CalcRoom01Page');
  }
  goCalcSten01() { //Стеновой материал calc 01
    this.navCtrl.push('CalcSten01');
  }
  goCalcBrus01() { //Брус calc 01
    this.navCtrl.push('CalcBrus01');
  }
  goCalcOSB() { //Брус calc 01
    this.navCtrl.push('ListosbPage');
  }
  goCalcLaminat() { //Laminat 
    this.navCtrl.push('CalcLaminatPage');
  }

}
