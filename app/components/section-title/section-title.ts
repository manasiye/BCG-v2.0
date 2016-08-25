import { Directive, Input, ElementRef, AfterViewInit , HostListener} from '@angular/core';

/*
  Generated class for the SectionTitle directive.
  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[section-title]' // Attribute selector
})
export class SectionTitle implements AfterViewInit {

  @HostListener('window:scroll', ['$event'])
    track($event) {
        console.debug('scroll Event', $event);
    }
    
  @Input('sectionTitle') title: string;

  private el: HTMLElement;


  constructor(el: ElementRef) {
    // console.log('Hello World');
    this.el = el.nativeElement;
  }

  private setTitle(title: string) {
    this.el.innerHTML = title;
  }
  ngAfterViewInit() {
     this.setTitle(this.title);
     
    //  this.el.className  = 'wonder';
    //  console.log('Class List', this.el.classList);
    // Subscribe to the scroll eevnts
    // this.scrollEvent.subscribe(event => {
    //   this.offsetHeight = event.target.offsetHeight;
    //   this.offsetTop = event.target.offsetTop;
    //   this.scrollTop = event.target.scrollTop;
    //   // console.log(event.target.offsetHeight, event.target.offsetTop, event.target.scrollTop);
    //   // console.log('ScrollerHandle', this.scrollerHandle.scrollTop, this.scrollerHandle.offsetTop, this.scrollerHandle.offsetHeight);
    //   this.updateElasticbanner();
    // });
    
  }
}