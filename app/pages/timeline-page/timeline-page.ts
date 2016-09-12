import {Component, Input, ViewChild} from '@angular/core';
import {NavController, Tabs} from 'ionic-angular';
import { FourHours } from '../four-hours/four-hours';
import { TwoHours } from '../two-hours/two-hours';
import { SixHours } from '../six-hours/six-hours';
import { FortyEightHours } from '../fortyeight-hours/fortyeight-hours';
import {HelpPage} from '../help-page/help-page';
import {HomePage} from '../home-page/home-page';


/*
  Generated class for the TimelinePage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/timeline-page/timeline-page.html'
})
export class TimelinePage {

    tabs = [];
    @ViewChild('timelineTabs') tabsRef: Tabs;

    ionViewDidEnter() {
    }

    constructor(private nav: NavController) {
        this.tabs = [
            {
                component: FourHours,
                icon: 'home',
                title: '4 hrs',
                enabled: true
            },
            {
                component: TwoHours,
                icon: 'home',
                title: '2 hrs',
                enabled: true
            },
            {
                component: SixHours,
                icon: 'home',
                title: '6 hrs',
                enabled: true
            },
            {
                component: FortyEightHours,
                icon: 'home',
                title: '48 hrs',
                enabled: true
            }
        ];

        // this.tabsRef.select(1);

        // this.tsh.subscribe(event => {
        //     this.refreshTabStatus(event);
        // });
    }

    openHome(page) {
        this.nav.setRoot(HomePage);
    }
    openHelp(page) {
        this.nav.setRoot(HelpPage);
    }

    // refreshTabStatus(event): void {
    //     console.log('tab refresh Works', event);
    //     if (event.newEntries > 0) {
    //         for (let tab of this.tabs) {
    //             if (tab.title.toLowerCase() === event.id) {
    //                 tab.enabled = true;
    //             } else {
    //                 tab.enabled = false;
    //             }
    //         }
    //     } else {
    //         for (let tab of this.tabs) {
    //             tab.enabled = true;
    //         }
    //     }


    // }

}