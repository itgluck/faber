import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription} from 'rxjs/Subscription';
// import { global } from '../../app/global'

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  
  public localonline:boolean = true;
  price: any; 
  price2: any;
  connected: Subscription;
  disconnected: Subscription;
  constructor(private toast: ToastController, private network: Network, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('Каталог продукции');
  }
  
  // Network Status Toast
  displayNetworkUpdate(connectionState: string){
  // let networkType = this.network.type;
  this.localonline=!this.localonline;
  this.toast.create({
    message: `Вы снова ${connectionState}`,
    duration: 3000
  }).present();
}

// Network Status
ionViewDidEnter() {
  this.connected = this.network.onConnect().subscribe(data => {
    console.log(data)
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
 
  this.disconnected = this.network.onDisconnect().subscribe(data => {
    console.log(data)
    this.displayNetworkUpdate(data.type);
  }, error => console.error(error));
}

ionViewWillLeave(){
  this.connected.unsubscribe();
  this.disconnected.unsubscribe();
}
  
  doFrame() { 
    // this.online=!this.online;
    // console.log('Смена обзора...');
    
    this.localonline=!this.localonline;
   
  }
}
