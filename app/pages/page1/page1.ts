import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Services } from '../../services';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(private navController: NavController, public appService: Services) {
    this.appService = appService;
  }
  
 loadContent():void{
   this.appService.load();
 }
}
