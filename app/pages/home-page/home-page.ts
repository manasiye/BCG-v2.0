import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import { HelpPage } from '../help-page/help-page';
import { PageIntro } from '../page-intro/page-intro';
import { PageQuestions } from '../page-questions/page-questions';
import { PageTreatment } from '../page-treatment/page-treatment';
import { TimelinePage } from '../timeline-page/timeline-page';
import { PageSideEffects } from '../page-sideeffects/page-sideeffects';
import { AudioModal } from '../../components/audio-modal/audio-modal';
import { PageableSections } from '../../types/pageable-sections';


@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  directives: [AudioModal]
})
export class HomePage extends PageableSections implements AppPage {

  pageId: string = 'HomePage';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    super();
    cp.getPage(this.pageId).subscribe((page) => {
      // console.log(page);
      this.pageContent = page;
    });
  }

  // Reset the content nav to have just this page
  // we wouldn't want the back button to show in this scenario
  openHome(page) {
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
    this.nav.setRoot(TimelinePage);
  }
}
