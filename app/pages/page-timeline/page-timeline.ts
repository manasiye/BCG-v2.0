import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPage } from '../../interfaces/app-page/app-page';
import { ContentProvider } from '../../providers/content-provider/content-provider';


@Component({
  templateUrl: 'build/pages/page-timeline/page-timeline.html'
})
export class PageTimeline{


  constructor(private nav: NavController, cp: ContentProvider) {
    
  }
}
