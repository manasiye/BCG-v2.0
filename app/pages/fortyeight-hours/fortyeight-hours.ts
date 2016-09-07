import { Component, Output, ViewChild, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpPage } from '../help-page/help-page';
import { HomePage } from '../home-page/home-page';


@Component({
  templateUrl: 'build/pages/fortyeight-hours/fortyeight-hours.html'
})

export class FortyEightHours {

    constructor(private nav: NavController) {
    }
    openHome(page) {
    this.nav.setRoot(HomePage);
  }
  openHelp(page) {
    this.nav.setRoot(HelpPage);
  }
}