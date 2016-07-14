import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';
import { Page4 } from './pages/page4/page4';
import { Page5 } from './pages/page5/page5';
import { Page6 } from './pages/page6/page6';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  pages: Array<{title: string, component: any}>

  constructor(
    private platform: Platform,
    private menu: MenuController
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Page1 },
      { title: 'BCG TREATMENT What, When & How', component: Page2 },
      { title: 'Before, During & Ater TREATMENT', component: Page3 },
      { title: 'Treatment TIMELINE', component: Page4 },
      { title: 'BCG SIDEEFFECTS', component: Page5 },
      { title: 'Frequently Asked QUESTIONS', component: Page6 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
