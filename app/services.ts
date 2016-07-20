import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class Services {
    error: any;
    contentUrl: string = '../../content.json';
    appContent: Subject<any>;

    constructor(private http: Http) {
        this.http = http;
        this.loadContent();
        this.appContent = new Subject();
        this.appContent.asObservable();
    }

    loadContent(): void {
        console.log('Load content: Start');
        // this.appContent  = ;

        this.http.get(this.contentUrl).subscribe(
            (data) => {
                console.log('Got Data', data);

                this.appContent.next(data.json());
                console.log('Load content: End');
            },
            (error) => { console.log(error) }

        );
    }
    getContent(pageId: string): Promise<any> {


        console.log('Get content');
        let requestedPage;
        this.appContent.subscribe((data)=>{

        });
        this.appContent.forEach(page => {
            if(page.pageId === pageId){
                requestedPage = page;
            }
        });

        /**
         * TODO implement page logic here
         */
        return new Promise(function (resolve, reject) {
            // async stuff, like fetching users from server, returning a response
            if(typeof requestedPage === undefined){
                reject('No Page Found');
            }else{
            resolve(requestedPage);
            }
        })
    }
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);

        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}


