import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import {HelpPage} from '../help-page/help-page';
import {HomePage} from '../home-page/home-page';
import { PageableSections } from '../../types/pageable-sections';
import { Pager } from '../../components/pager/pager';
import { AudioModal } from '../../components/audio-modal/audio-modal';


@Component({
  templateUrl: 'build/pages/page-questions/page-questions.html',
  directives: [AudioModal, Pager]
})
export class PageQuestions extends PageableSections implements AppPage {

  pageId: string = 'PageQuestions';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    super();
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent = page;
      console.log('Got Page Data: ', page);

    });
  }
  openHome(page) {
    this.nav.setRoot(HomePage);
  }
  openHelp(page) {
    this.nav.setRoot(HelpPage);
  }
}