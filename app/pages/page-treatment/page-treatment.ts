import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import {HelpPage} from '../help-page/help-page';
import {PageHome} from '../page-home/page-home';


@Component({
  templateUrl: 'build/pages/page-treatment/page-treatment.html'
})
export class PageTreatment implements AppPage {

  pageId: string = 'PageTreatment';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent = page;
      // console.log('Got Page Data: ', page);

    });
  }
  openHome(page) {
    this.nav.setRoot(PageHome);
  }
  openHelp(page) {
    this.nav.setRoot(HelpPage);
  }
}