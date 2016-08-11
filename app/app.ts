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
import { HelpPage } from './pages/help-page/help-page';
import { AckPage } from './pages/ack-page/ack-page';

import { ContentProvider } from './providers/content-provider/content-provider';

export interface Page {
  iconName: string;
  customIcon?: boolean,
  title: {
    smallFirst?: boolean,
    small?: string,
    large?: string
  },
  component: any
}

@Component({
  templateUrl: 'build/app.html',
  providers: [HTTP_PROVIDERS, ContentProvider]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PageHome;
  pages: Array<Page>

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {
        iconName: 'home',
        title: {
          large: 'Home'
        },
        component: PageHome
      },
      {
        iconName: 'icon-bcg',
        customIcon: true,
        title: {
          // smallFirst: true,
          small: 'What, When & How',
          large: 'BCG TREATMENT'
        },
        component: PageIntro
      },
      {
        iconName: 'timer',
        title: {
          // smallFirst: true,
          small: 'Before, During & After',
          large: 'TREATMENT'
        },
        component: PageTreatment
      },
      {
        iconName: 'icon-timeline',
        customIcon: true,
        title: {
          small: 'Treatment',
          large: 'TIMELINE'
        },
        component: PageTimeline
      },
      {
        iconName: 'icon-sideeffects',
        customIcon: true,
        title: {
          small: 'BCG',
          large: 'SIDE EFFECTS'
        },
        component: PageSideEffects
      },
      {
        iconName: 'help-circle',
        title: {
          small: 'Frequently Asked',
          large: 'QUESTIONS'
        },
        component: PageQuestions
      },
      {
        iconName: 'information-circle',
        title: {
          small: 'Help'
        },
        component: HelpPage
      },
      {
        iconName: 'medal',
        title: {
          small: 'Acknowledgements'
        },
        component: AckPage
      }
      // ,
      // { title: 'BCG TREATMENT What, When & How', component: PageIntro },
      // { title: 'Before, During & Ater TREATMENT', component: PageTreatment },
      // { title: 'Treatment TIMELINE', component: PageTimeline },
      // { title: 'BCG SIDE EFFECTS', component: PageSideEffects },
      // { title: 'Frequently Asked QUESTIONS', component: PageQuestions },
      // { title: 'Help', component: PageHelp },
      // { title: 'Acknowledgements', component: PageAck }
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
