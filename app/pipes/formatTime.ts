import { Injectable, Pipe } from '@angular/core';

@Pipe({
    name: 'formatTime'
})
@Injectable()
export class FormatTime {

    padding: string = '0';

    transform(value: number, args: any[]) {
        if (value) {
            let minutes = (this.padding + Math.floor(value / 60)).slice(-2);
            let seconds = (this.padding + Math.round(value % 60)).slice(-2);
            return minutes + ':' + seconds;
        }
    }
}