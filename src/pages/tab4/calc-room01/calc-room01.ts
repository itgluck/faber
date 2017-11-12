import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calc-room01',
  templateUrl: 'calc-room01.html',
})
export class CalcRoom01Page {
  wroom : any  ;
  lroom : any  ;
  hroom : any  ;
  ndoor: any; 
  wdoor: any;
  hdoor: any;
  nwindow: any;
  wwindow: any;
  hwindow: any;
  Pfloor:any
  // price: any;
  text = "Заполните все поля и нажмите кнопку 'Расчитать'";
  postfix = ' руб';
  result : String;
  Swall: any; //Площадь стен
  Sdoor: any; //Площадь дверей
  Swindow: any; //Площадь окон
  Sroom :any;
constructor(public navCtrl: NavController) { }

doClear(){
  this.wroom = null;
  this.lroom = null;
  this.hroom = null;
  this.ndoor = null;
  this.nwindow = null;
}
getSdoor() { //Площадь дверей
  let  wdoor = this.wdoor ? parseFloat(this.wdoor) : 0 ;
  let  hdoor = this.hdoor ? parseFloat(this.hdoor) : 0;
  let  ndoor = this.ndoor ? parseFloat(this.ndoor) : 0;
  //  let  price = this.price ? parseFloat(this.price) : 0;
  // let Swall = 0;
  var Sdoor =( wdoor * hdoor * ndoor) * 0.0001;
  return Sdoor;

}
getSwindow() { //Площадь окон
  let  wwindow = this.wwindow ? parseFloat(this.wwindow) : 0 ;
  let  hwindow = this.hwindow ? parseFloat(this.hwindow) : 0;
  let  nwindow = this.nwindow ? parseFloat(this.nwindow) : 0;
  //  let  price = this.price ? parseFloat(this.price) : 0;
  // let Swall = 0;
  var Swindow =( wwindow * hwindow * nwindow) * 0.0001;
  console.log("Площадь окон " + Swindow);
  return Swindow;


}

getSwall() { //Площадь стен
  let  wroom = this.wroom *100 ? parseFloat(this.wroom) : 0;
  let  hroom = this.hroom *100 ? parseFloat(this.hroom) : 0;
  let  lroom = this.lroom *100 ? parseFloat(this.lroom) : 0;
 
  
  let  hwindow = this.hwindow ? parseFloat(this.hwindow) : 0;
  let  nwindow = this.nwindow ? parseFloat(this.nwindow) : 0;
  let  wwindow = this.wwindow ? parseFloat(this.wwindow) : 0 ;
  
  
  let  wdoor = this.wdoor ? parseFloat(this.wdoor) : 0 ;
  let  hdoor = this.hdoor ? parseFloat(this.hdoor) : 0;
  let  ndoor = this.ndoor ? parseFloat(this.ndoor) : 0;

  var Sdoor =( wdoor * hdoor * ndoor) * 0.0001;
  var Swindow =( wwindow * hwindow * nwindow) * 0.0001;

  var proem = Sdoor + Swindow;
  console.log("Площадь проемов " + proem);

  this.Sroom = (wroom*hroom*2)+(lroom*hroom*2);
  var Swall = this.Sroom -proem;
  console.log("Площадь стен " + Swall);
  console.log("Площадь комнаты " + this.Sroom);

  return Swall;
}

getSfloor() {
  let  wroom = this.wroom *100 ? parseFloat(this.wroom) : 0;
  let  lroom = this.lroom *100 ? parseFloat(this.lroom) : 0;
  return wroom*lroom;
 
}
getPfloor() {
  let  wroom = this.wroom *100 ? parseFloat(this.wroom) : 0;
  let  lroom = this.lroom *100 ? parseFloat(this.lroom) : 0;
  this.Pfloor= wroom*2+(lroom*2);
  return this.Pfloor;
 
}
getPfloor2() {  
  let  wdoor = this.wdoor ? parseFloat(this.wdoor) : 0 ;
  let  ndoor = this.ndoor ? parseFloat(this.ndoor) : 0;
  var dver = wdoor*0.01*ndoor;
  console.log("Порожек " + dver);

  return this.Pfloor - dver; 
}
getNal() {  
  let  wdoor = this.wdoor ? parseFloat(this.wdoor) : 0 ;
  let  hdoor = this.hdoor ? parseFloat(this.hdoor) : 0;
  let  ndoor = this.ndoor ? parseFloat(this.ndoor) : 0;
  var nal = (wdoor*0.01+(hdoor*0.01*2)) * ndoor;
  console.log("Наличник " + nal);

  return nal; 
}

}
