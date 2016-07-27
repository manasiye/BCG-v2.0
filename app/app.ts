import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HTTP_PROVIDERS} from '@angular/http';
import { PageHome } from './pages/page-home/page-home';
import { PageIntro } from './pages/page-intro/page-intro';
import { PageTreatment } from './pages/page-treatment/page-treatment';
import { PageTimeline } from './pages/page-timeline/page-timeline';
import { PageSideEffects } from './pages/page-sideeffects/page-sideeffects';
import { PageQuestions } from './pages/page-questions/page-questions';
import { PageHelp } from './pages/page-help/page-help';
import { PageAck } from './pages/page-ack/page-ack';

import { ContentProvider } from './providers/content-provider/content-provider';


@Component({
  templateUrl: 'build/app.html',
  providers: [HTTP_PROVIDERS, ContentProvider]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageHelp;
  pages: Array<{ title: string, component: any }>

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: PageHome },
      { title: 'BCG TREATMENT What, When & How', component: PageIntro },
      { title: 'Before, During & Ater TREATMENT', component: PageTreatment },
      { title: 'Treatment TIMELINE', component: PageTimeline },
      { title: 'BCG SIDE EFFECTS', component: PageSideEffects },
      { title: 'Frequently Asked QUESTIONS', component: PageQuestions },
      { title: 'Help', component: PageHelp },
      { title: 'Acknowledgements', component: PageAck }
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

ionicBootstrap(MyApp, [HTTP_PROVIDERS, ContentProvider]);
