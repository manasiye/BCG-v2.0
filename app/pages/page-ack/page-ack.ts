import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';


@Component({
  templateUrl: 'build/pages/page-ack/page-ack.html',
  // styleUrls: ['build/pages/page-ack/page-ack.css'] ---------written in app.core.scss under themes
})
export class PageAck implements AppPage {

  pageId: string = 'PageAck';
  pageContent: any;

  constructor(private navController: NavController, cp: ContentProvider) {
    cp.getPage(this.pageId).subscribe((page) => {
      this.pageContent = page;
      console.log('Got Page Data: ', page);
    });
  }

}