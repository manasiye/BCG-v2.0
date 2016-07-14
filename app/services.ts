import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Services {
    data:any;
    error:any;
    url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.feedburner.com%2Fraymondcamdensblog%3Fformat%3Dxml%22&format=json&diagnostics=true&callback=';
    constructor(public http: Http) {
        this.http = http;
  }
  load():void{
      this.http.get('../../content.json').subscribe(result => {
          console.log(JSON.parse(result.text()));
      });
//       .map((res:Response) => res.json())
//         .subscribe(
//     data => this.saveData(data),
//     err => this.error = err,
//     () => console.log('complete')
//   );
  }
  saveData(data:any){
      console.log('Got this data: ',data);
      this.data = data;
  }
}


