import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APP_CONTENT } from './content';
import { Observable } from  'rxjs/Observable';

/*
  Generated class for the ContentProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContentProvider {
  data: any;

  constructor(private http: Http) {
    this.data = null;
  }

  // APP_CONTENT
  getPage(pageId: any) {
    return Observable.create(observer => {
      let reqPage;
      APP_CONTENT.forEach(page => {
        if (page.pageId === pageId) {
          reqPage = page;
        }
      });
      if (typeof reqPage === 'undefined') {

      } else {
        observer.next(reqPage);
      }
      observer.complete();
    });
  }
}

