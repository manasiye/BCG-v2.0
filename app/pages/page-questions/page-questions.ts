import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';

@Component({
  templateUrl: 'build/pages/page-questions/page-questions.html'
})
export class PageQuestions implements AppPage{

  pageId: string = 'PageQuestions';
  pageContent: any;

  constructor(private navController: NavController,cp:ContentProvider) {
    this.loadPageContent();
    cp.getPage(this.pageId).subscribe((page) => {
      console.log('Got Page Data: ', page);

    });
  }
  loadPageContent(): void {
    console.log('Load content: Start');
  }
}