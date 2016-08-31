import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import {HelpPage} from '../help-page/help-page';
import {PageIntro} from '../page-intro/page-intro';
import {PageQuestions} from '../page-questions/page-questions';
import {PageTreatment} from '../page-treatment/page-treatment';
import {PageTimeline} from '../page-timeline/page-timeline';
import {PageSideEffects} from '../page-sideeffects/page-sideeffects';




@Component({
  templateUrl: 'build/pages/page-home/page-home.html',
})
export class HomePage implements AppPage {

  pageId: string = 'PageHome';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    // cp.getPage(this.pageId).subscribe((page) => {
    //   this.pageContent = page;
    //   // console.log('Got Page Data: ', page);

    // });
  }
   openHome(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(HomePage);
  }
   openHelp(page) {
    this.nav.setRoot(HelpPage);
  }
   openIntro(page) {
    this.nav.setRoot(PageIntro);
  }
   openTreatment(page) {
    this.nav.setRoot(PageTreatment);
  }
   openFaq(page) {
    this.nav.setRoot(PageQuestions);
  }
   openSideEffects(page) {
    this.nav.setRoot(PageSideEffects);
  }
  openTimeline(page) {
    this.nav.setRoot(PageTimeline);
  }
}