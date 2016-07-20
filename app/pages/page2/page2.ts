import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Services} from '../../services';
import {Subject} from 'rxjs/Subject';

@Component({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {

  pageContent: Promise<any>;

  constructor(private nav: NavController, navParams: NavParams, public appService: Services) {
    this.appService = appService;
    this.pageContent = this.appService.getContent('page2');

    this.pageContent.then((data) => {
      console.log('New Data', data);
      console.log('Prev', this.pageContent);
      this.pageContent = data;
      console.log('Prev', this.pageContent);
    },
      (error) => {
        console.error(error);
      });
  }
}
