import { Injectable, Pipe } from '@angular/core';

@Pipe({
    name: 'formatTime',
    pure: false
})
@Injectable()
export class FormatTime {

    padding: string = '0';

    transform(value: any, args: any[]): string {
        if (value) {
            console.log(value);
            // let minutes = (this.padding + Math.floor(value / 60)).slice(-2);
            // let seconds = (this.padding + Math.floor(value % 60)).slice(-2);
            // console.log(minutes + ':' + seconds);
            let val = (this.padding + Math.floor(Number(value) / 60)).slice(-2) + ':' + (this.padding + Math.floor(Number(value) % 60)).slice(-2);
            return val;
        }
    }
}