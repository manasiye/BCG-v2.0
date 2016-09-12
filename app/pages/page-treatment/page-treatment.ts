import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';
import { HelpPage } from '../help-page/help-page';
import {HomePage} from '../home-page/home-page';
import { PageableSections } from '../../types/pageable-sections'; 
import { Pager } from '../../components/pager/pager';
import { AudioModal } from '../../components/audio-modal/audio-modal';


@Component({
  templateUrl: 'build/pages/page-treatment/page-treatment.html',
  directives: [AudioModal,Pager]
})
export class PageTreatment extends PageableSections implements AppPage {

  pageId: string = 'PageTreatment';
  pageContent: any;

  constructor(private nav: NavController, cp: ContentProvider) {
    super();
    cp.getPage(this.pageId).subscribe((page)=>{
      console.log(page);
        this.pageContent = page;
    });
  }
  test(){
    console.log(this.pageContent);
    
  }
  openHome(page) {
    this.nav.setRoot(HomePage);
  }
  openHelp(page) {
    this.nav.setRoot(HelpPage);
  }
}