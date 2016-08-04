import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';

@Component({
  templateUrl: 'build/pages/help-page/help-page.html'
})
export class HelpPage implements AppPage {

  pageId: string = 'HelpPage';
  pageContent: any;

  constructor(private navController: NavController, cp: ContentProvider) {
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent = page;
      console.log('Got Page Data: ', page);
    });
  }
}