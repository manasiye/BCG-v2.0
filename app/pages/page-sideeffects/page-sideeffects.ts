import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import {HelpPage} from '../help-page/help-page';
import {HomePage} from '../home-page/home-page';
import { PageableSections } from '../../types/pageable-sections';
import { Pager } from '../../components/pager/pager';

@Component({
  templateUrl: 'build/pages/page-sideeffects/page-sideeffects.html',
  directives: [Pager]
})
export class PageSideEffects extends PageableSections implements AppPage {

  pageId: string = 'PageSideEffects';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    super();
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent=page;
      // console.log('Got Page Data: ', page);
    });
  }
  openHome(page) {
   this.nav.setRoot(HomePage);
  }
   openHelp(page) {
   this.nav.setRoot(HelpPage);
  }
}