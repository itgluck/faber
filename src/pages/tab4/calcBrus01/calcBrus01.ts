import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-CalcBrus01',
  templateUrl: 'CalcBrus01.html'
})
export class CalcBrus01 { 
 
  visible = false;
  
  width : any;
  long : any; 
  height : any; 
  pcs: any; 
  price: any; 
  price2: any;
  text = "Заполните все поля и нажмите кнопку 'Расчитать'";
  postfix = ' руб';
  result : String;
  totalValue: any; //Суммарный объём
  totalWeight: any; //Суммарный вес 
  oneWeight: any; //Суммарный вес
  totalPrice: any; //Суммарная стоимость
constructor(public navCtrl: NavController) { };

doClear(){
  this.width = null;
  this.long = null; 
  this.height = null;
  this.price = null;
  this.price2 = null;
  this.pcs = null; 
}

toggleDiv() {
  this.visible=!this.visible;  
}
  getValue() { //Объем одного бруса
    let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
    let  long = this.long ? parseFloat(this.long) : 0;
    let  height = this.height ? parseFloat(this.height) : 0;
    let value = (width * 0.001)*(long * 0.001)* (height *0.001);
    this.oneWeight =  value * 750; // Вес одной доски 
    return value;
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
    //  let  price = this.price ? parseFloat(this.price) : 0;
    // let totalValue = 0;
    this.totalValue = ((width * 0.001)*(long * 0.001)* (height *0.001))*pcs;
    // this.totalPrice = totalValue * price;
    this.totalWeight =  this.totalValue * 750; // Вес одной доски 
    return this.totalValue;

  }
  getWeight() { 
     // Вес одной доски 
    return this.oneWeight;
     
  }
  getTotalWeight() { 
   
    return this.totalWeight;

  }


  getTotalS() { //Площадь по ширине бруса
    let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;   
     let  long = this.long ? parseFloat(this.long) : 0;
    
    return (width * 0.001)* (long *0.001)*pcs;
  }
  getTotalPrice() {

    let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
    let  price = this.price ? parseFloat(this.price) : 0;
    let  price2 = this.price2 ? parseFloat(this.price2) : 0;
    // let visible = this.visible;
      if (this.visible == true)
      {

        this.totalPrice = pcs* price2;
        console.log("Стоимость за ед"+ this.totalPrice);
        console.log(this.visible);
        return this.totalPrice;
      }
      else 
        this.totalPrice = this.totalValue * price;;
        console.log("Стоимость за куб"+ this.totalPrice);
        console.log("Объем"+ this.totalValue);
        return this.totalPrice;
      
      // console.log("Стоимость за куб"+ this.totalPrice);
  }







  
  // Calc () {
  //   // let  width = this.width ? parseFloat(this.width) : 0 ;
  //   // let  long = this.long ? parseFloat(this.long) : 0;
  //   // let  height = this.height ? parseFloat(this.height) : 0;
  //   // this.total = (width * long * height)/100000; 
  //   this.text = "Общая стоимость ";
  //   // Общая стоимость
  //   this.totalPrice = this.totalValue * price;
    
    
  //   this.result = this.totalPrice + this.postfix;
  //   console.log("Расчет...");
  // }
// getTotalPrice() { //Суммарный объем
//     let  width = this.width * 0.001 ? parseFloat(this.width) : 0 ;
//     let  long = this.long ? parseFloat(this.long) : 0;
//     let  height = this.height ? parseFloat(this.height) : 0;
//     let  pcs = this.pcs ? parseFloat(this.pcs) : 0;
//     return ((width * 0.001)*(long * 0.001)* (height *0.001))*pcs;
//   }


}
