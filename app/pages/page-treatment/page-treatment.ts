import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';



@Component({
  templateUrl: 'build/pages/page-treatment/page-treatment.html'
})
export class PageTreatment implements AppPage {

  pageId: string = 'PageTreatment';
  pageContent: any;

  constructor(private navController: NavController, cp: ContentProvider) {
    this.loadPageContent();
    cp.getPage(this.pageId).subscribe((page) => {
      console.log('Got Page Data: ', page);

    });
  }
  loadPageContent(): void {
    console.log('Load content: Start');

  }
}