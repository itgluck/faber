import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-CalcSten01',
  templateUrl: 'CalcSten01.html'
})
export class CalcSten01 {
  // total : any ;
  width : any  ;
  long : any  ;
  height : any  ;
  pcs: any;
  price: any;
  text = "Заполните все поля и нажмите кнопку 'Расчитать'";
  postfix = ' руб';
  result : String;
  totalValue: any; //Суммарный объём
  totalPrice: any; //Суммарная стоимость
constructor(public navCtrl: NavController) { }
 

getValue() { //Объем одного бруса
  let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
  let  long = this.long ? parseFloat(this.long) : 0;
  let  height = this.height ? parseFloat(this.height) : 0;
  return (width * 0.001)*(long * 0.001)* (height *0.001);
}
getCube() { //Количество бруса в кубе
  let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
  let  long = this.long ? parseFloat(this.long) : 0;
  let  height = this.height ? parseFloat(this.height) : 0;
  return (1/((width * 0.001)*(long * 0.001)* (height *0.001)));
}
getTotalValue() { //Суммарный объем
  let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
  let  long = this.long ? parseFloat(this.long) : 0;
  let  height = this.height ? parseFloat(this.height) : 0;
  let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
   let  price = this.price ? parseFloat(this.price) : 0;
  // let totalValue = 0;
  var totalValue = ((width * 0.001)*(long * 0.001)* (height *0.001))*pcs;
  this.totalPrice = pcs * price;
  return totalValue;

}
getTotalPrice() {
           return this.totalPrice;
}


}
