import { Directive, Component, Input, OnChanges } from '@angular/core';
import { Modal, NavController, NavParams, ModalOptions, ViewController } from 'ionic-angular';
import { Device } from 'ionic-native';
import { MediaPlugin } from 'ionic-native';


@Component({
    templateUrl: 'build/pages/audio-modal/audio-modal.html',
    providers: [Device]
})
export class AudioModalPage implements OnChanges {

    audioSrc: string;
    title: string;
    audioFile: MediaPlugin;

    myTracks: any[];
    allTracks: any[];

    status: number = MediaPlugin.MEDIA_PAUSED;
    duration: number = 0;
    currentPosition:number = 0;


    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API

    }
    constructor(private viewCtrl: ViewController, private params: NavParams) {
        this.viewCtrl = viewCtrl;
        this.audioSrc = params.get('audioSrc');
        this.title = params.get('title');

        console.log(Device.device);




        this.audioFile = new MediaPlugin(this.audioSrc);

        // Catch the Success & Error Output
        // Platform Quirks
        // iOS calls success on completion of playback only
        // Android calls success on completion of playback AND on release()
        this.audioFile.init.then(success=>{
            console.log('Audio Ended',success);
        },
        err=>{
            console.log('Audio Load error',err);
        });

        this.audioFile.status.subscribe(status=>{
            console.log('Audio Status Before :',this.status);
            this.status = status;
            console.log('Audio Status After :',this.status);
        },
        err=>{
            console.log('Audio Status error',err);
        });

        setTimeout(()=>{
            this.togglePlayPause();
            this.duration = this.audioFile.getDuration();
        },300);

        
        // this.audioFile.init.then((data) => {
        //     console.log(data,'Playback Finished');
        // }, (err) => {
        //     console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
        // });


        // get current playback position
        // this.audioFile.getCurrentPosition().then((position) => {
        //     console.log('Current Position: ', position);
        // });

        // get file duration
        // console.log('Total Duration: ', this.audioFile.getDuration());
    }

    togglePlayPause() {
        if (this.status === MediaPlugin.MEDIA_PAUSED) {
            this.audioFile.play();
        } else {
            this.audioFile.pause();
        }
    }
    stop() {
        this.audioFile.stop();

        // TODO: Check and trigger only for android
        // this.audioFile.release();
    }

    dismiss() {
        this.stop();
    }

    ngOnChanges(){
        // this.currentPosition = this.audioFile.getCurrentPosition().then(currentPostion=>{

        // });
    }
}