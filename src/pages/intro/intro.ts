import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// @IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doStartApp() {
    this.navCtrl.setRoot('MenuPage');
  } 
}
