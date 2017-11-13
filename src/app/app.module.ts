import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import {SocialSharing} from '@ionic-native/social-sharing';      
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IntroPage } from '../pages/intro/intro'
// import { MenuPage } from '../pages/menu/menu';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    // MenuPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // MenuPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    Network,
    // SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
