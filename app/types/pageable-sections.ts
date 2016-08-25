import {Input, Output, EventEmitter, ViewChild}  from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Content} from 'ionic-angular';

export class PageableSections {
    currentSection: number = 0;
    @Output() selectSectionEvent: EventEmitter<number>;
    pageScrollEvent: Observable<any>;
    @ViewChild(Content) content: Content;

    constructor() {

        this.selectSectionEvent = new EventEmitter<number>();

        /**
         * Create a new Observable so directives can listen to scroll events
         * emitted by the content 
         */
        this.pageScrollEvent = new Observable(observer => {
            this.content.addScrollListener($event => {
                observer.next($event);
            });
        });
    }

    updateCurrentSection(sectionIndex: number): void {
        this.currentSection = sectionIndex;
    };
    selectSection(sectionIndex: number): void {
        this.selectSectionEvent.emit(sectionIndex);
    }
}