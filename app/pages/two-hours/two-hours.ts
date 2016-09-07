import { Component, Output, ViewChild, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/two-hours/two-hours.html'
})

export class TwoHours {

    constructor(private navController: NavController) {
    }
}