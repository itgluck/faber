import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

declare var window;
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav:Nav;
 
  pages: PageInterface[] = [
    {title: 'Новости', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home'},
    {title: 'Каталог товаров', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'cart'},
    {title: 'Контакты', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'people'},
    {title: 'Регистрация', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 3, icon: 'bulb'},
    {title: 'О компании', pageName: 'AboutPage', icon: 'star'},
    {title: 'Работа', pageName: 'ServisePage', icon: 'person-add'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  } 
 
 openPage(page: PageInterface) {
   let params = {};

   if (page.index) {
     params = {tabIndex: page.index};
   }

   if (this.nav.getActiveChildNav () && page.index != undefined) {
     this.nav.getActiveChildNav().select(page.index);
   } else {
    //  this.nav.setRoot(page.pageName, params);
     this.nav.push(page.pageName, params);
   }

 }
 
 isActive(page: PageInterface) {
  let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'child';
      }
        return;
    }
   
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'child';
    }
 
  }
  callMe(passedNumber){
    window.location = passedNumber;
    console.log("Идет звонок ...")
  }
  mailMe(passedEmail){
    window.location = passedEmail;
    console.log("Отправить письмо ...")
  }
  openMap(){
    window.location = 'geo:54.7066,20.509?z=9&q=АП Большакова Faberlic';
    console.log("Точка на карте ...")
  }

}
