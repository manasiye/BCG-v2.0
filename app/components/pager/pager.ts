import { Directive, ElementRef, AfterViewInit, OnInit, Input, Output, EventEmitter, ContentChildren, Query, QueryList, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Content, ViewController } from 'ionic-angular';

@Directive({
  selector: '[pager]', // Attribute selector
})
export class Pager implements AfterViewInit {

  _sections: Array<ElementRef> = [];
  _sectionPositions: Array<number> = [];


  @Input() pageScrollEvent: Observable<any>;
  @Input() selectSectionEvent: Observable<any>;
  @Output() currentSection = new EventEmitter();
  @Output() sectionPositions = new EventEmitter();

  @ContentChildren('pageSection') sections: any;
  @ContentChildren('pagerElement') pagers: any;

  @ViewChild(Content) content: Content;

  el: ElementRef;
  vc: ViewController;

  constructor(el: ElementRef, vc: ViewController) {
    this.el = el;
    this.vc = vc;

    this.vc.loaded(() => {
    
    });
  }
  ngAfterViewInit() {
    this.sections.changes.subscribe((newElements) => {
  
      for (let element of newElements.toArray()) {
        // console.log(element);
        this._sections.push(element);
      }

      this.updateSectionPositions();
      // console.log(this._sections);
      // console.log(this._sectionPositions);

    });

    this.pageScrollEvent.subscribe(event => {
      this.updateCurrentSeciton(event.target.offsetTop, event.target.scrollTop);
    });
    this.selectSectionEvent.subscribe(value => {
      this.scrollToSection(value);
    });
  }
  updateSectionPositions() {
    this._sectionPositions = [];
    for (let section of this._sections) {
      this._sectionPositions.push(section.nativeElement.offsetTop);
    }
  }

  private updateCurrentSeciton(offsetTop: number, scrollTop: number) {

    if (this._sectionPositions[0] === 0) {
      this.updateSectionPositions();
    }

    let currentScrollPos = offsetTop + scrollTop;
    let currentSection = 0;

    for (let i = 0; i < this._sectionPositions.length; i++) {
      if (currentScrollPos >= this._sectionPositions[i]) {
        currentSection = i;
      }
    }
    this.currentSection.emit(currentSection);
  }

  scrollToSection(sectionIndex: number) {
    if (this._sectionPositions[0] === 0) {
      this.updateSectionPositions();
    }

    this.vc.getContent().scrollTo(0, this._sectionPositions[sectionIndex], 500);
  };

}