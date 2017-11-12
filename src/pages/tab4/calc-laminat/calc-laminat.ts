import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calc-laminat',
  templateUrl: 'calc-laminat.html',
})
export class CalcLaminatPage {
  
  TotalS: any;
  width : any;
  long : any; 
  height : any; 
  pcsUp: any; 
  pcs: any; 
  Sup: any; 
  price: any; 
  totalPrice: any; //Суммарная стоимость


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('Расчет ламината');
  }

  doClear(){
    this.width = null;
    this.long = null; 
    this.height = null;
    this.price = null;
    // this.pcs = null; 
  }

  getTotalS() { //S упаковки
    let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
    let  long = this.long ? parseFloat(this.long) : 0;
    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
    this.Sup = (width * 0.001)*(long * 0.001)* this.pcsUp;
    this.TotalS = this.Sup* pcs;
    return this.TotalS;
  }
  getSup(){
    console.log('Площадь уп:' + this.TotalS);
    return this.TotalS;
  } 
  getTotalPrice(){
    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
    let  price = this.price ? parseFloat(this.price) : 0;
    var totalPrice = price * pcs;
    this.totalPrice = totalPrice;
    console.log('К оплате:' + this.totalPrice);
    return this.totalPrice;

  }

}
