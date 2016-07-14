import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {

  }
}
