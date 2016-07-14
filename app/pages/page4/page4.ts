import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page4/page4.html'
})
export class Page4 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {

  }
}
