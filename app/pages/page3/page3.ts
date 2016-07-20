import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Services} from '../../services';


@Component({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {

  pageContent: Promise<any>;

  constructor(private navController: NavController, navParams: NavParams, public appService:Services) {
      this.appService = appService;
    	this.pageContent = this.appService.getContent('page3');

  }
}