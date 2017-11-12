import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListosbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listosb',
  templateUrl: 'listosb.html',
})
export class ListosbPage {
  width : any  ;
  long : any  ;
  height : any  ;
  pcs: any;
  price: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Start ListosbPage');
  }


  getS() { //Площадь листа
    let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
    let  long = this.long * 0.001? parseFloat(this.long) : 0;
    return (width* 0.001)*(long * 0.001);
  }

  getTotalS() { //Площадь всех листов
    let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
    let  long = this.long * 0.001? parseFloat(this.long) : 0;
    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
    return (width* 0.001)*(long * 0.001)*pcs;
  }
  getTotalPrice() { //Площадь всех листов
    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
    let  price = this.price ? parseFloat(this.price) : 0;
    return price*pcs;
  }


}
