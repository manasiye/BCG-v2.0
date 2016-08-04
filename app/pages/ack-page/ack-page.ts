import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';


@Component({
  templateUrl: 'build/pages/ack-page/ack-page.html',
  // styleUrls: ['build/pages/ack-page/ack-page.html'] ---------written in app.core.scss under themes
})
export class AckPage implements AppPage {

  pageId: string = 'AckPage';
  pageContent: any;

  constructor(private navController: NavController, cp: ContentProvider) {
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent = page;
      console.log('Got Page Data: ', page);
    });
  }

}