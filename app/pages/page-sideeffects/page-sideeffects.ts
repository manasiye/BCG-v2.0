import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import {HelpPage} from '../help-page/help-page';
import {HomePage} from '../home-page/home-page';

@Component({
  templateUrl: 'build/pages/page-sideeffects/page-sideeffects.html'
})
export class PageSideEffects implements AppPage {

  pageId: string = 'PageSideEffects';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
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