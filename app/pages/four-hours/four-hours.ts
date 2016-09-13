import { Component, Output, ViewChild, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/four-hours/four-hours.html'
})

export class FourHours {

  constructor(private nav: NavController) {
  }

}