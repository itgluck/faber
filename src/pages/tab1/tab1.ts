import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
 
// http Call
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-tab1', 
  templateUrl: 'tab1.html',
})
export class Tab1Page {
  infoblocks: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http:Http) {
    // this.infoblocks = this.http.get('https://swapi.co/api/infoblocks').map(res => res.json());
    // this.infoblocks = this.http.get('https://api.myjson.com/bins/hpqdz').map(res => res.json());
    this.infoblocks = this.http.get('https://raw.githubusercontent.com/itgluck/stroycalc/master/src/assets/data.json').map(res => res.json());
    
    // Local
    // this.infoblocks = this.http.get('../assets/data.json').map(res => res.json());
}
  openDetails(promo) {
    this.navCtrl.push('NewsDetailPage', {promo: promo});
  }
  openModal(id) {
   let modal = this.modalCtrl.create('ModalPage', id);
    modal.present();

    }
}
