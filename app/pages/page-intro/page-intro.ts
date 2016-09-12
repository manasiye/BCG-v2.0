import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import { HelpPage } from '../help-page/help-page';
import { HomePage } from '../home-page/home-page';
import { AudioModal } from '../../components/audio-modal/audio-modal';


@Component({
  templateUrl: 'build/pages/page-intro/page-intro.html',
  directives: [AudioModal]
})
export class PageIntro implements AppPage {

  pageId: string = 'PageIntro';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {

   cp.getPage(this.pageId).subscribe((page)=>{
      // console.log(page);
        this.pageContent = page;
    });
  }
  openHome(page) {
    this.nav.setRoot(HomePage);
  }
  openHelp(page) {
    this.nav.setRoot(HelpPage);
  }

}
