import { Directive, Component, Input} from '@angular/core';
import { Modal, NavController, NavParams, ModalOptions, ViewController } from 'ionic-angular';
import { Device } from 'ionic-native';
import { MediaPlugin } from 'ionic-native';
import { FormatTime } from '../../pipes/formatTime';


@Component({
    templateUrl: 'build/pages/audio-modal/audio-modal.html',
    providers: [Device],
    pipes: [FormatTime]
})
export class AudioModalPage {

    audioSrc: string;
    title: string;
    audioFile: MediaPlugin;
    myTracks: any[];
    allTracks: any[];

    status: number = MediaPlugin.MEDIA_PAUSED;
    duration: number = 0;
    currentPosition: number = 0;
    currentPositionTimer: any = null;

    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API
    }
    constructor(private viewCtrl: ViewController, private params: NavParams) {
        this.viewCtrl = viewCtrl;
        this.audioSrc = params.get('audioSrc');
        this.title = params.get('title');

        // console.log(Device.device);

        this.audioFile = new MediaPlugin(this.audioSrc);

        // Catch the Success & Error Output
        // Platform Quirks
        // iOS calls success on completion of playback only
        // Android calls success on completion of playback AND on release()

        this.audioFile.init.then(success => {
            console.log('Audio Ended', success);
            this.stop();
        },
            err => {
                console.log('Audio Load error', err);
            });

        this.audioFile.status.subscribe(status => {

            if (this.status === 4) {
                this.stop();
            }
        },
            err => {
                console.log('Audio Status error', err);
            });

        this.play();

    }
    play() {
        if (this.audioFile) {
            this.audioFile.play();
            this.startCurrentPositionTimer();
            this.status = MediaPlugin.MEDIA_RUNNING;
        }
    }
    pause() {
        if (this.audioFile) {
            this.audioFile.pause();
            this.stopCurrentPositionTimer();
            this.status = MediaPlugin.MEDIA_PAUSED;
        }
    }
    stop() {
        if (this.audioFile) {
            this.audioFile.stop();
            this.stopCurrentPositionTimer();
            this.status = MediaPlugin.MEDIA_STOPPED;
            this.currentPosition = 0.1;
            // console.log('media stopped:setting it to 0', this.currentPosition);

            // TODO: Check and trigger only for android
            // this.audioFile.release();
        }
    }
    seekTo(event) {
        if (this.audioFile) {
            console.log(event.value * 1000);
            this.audioFile.seekTo(event.value * 1000);
        }
    }
    updateCurrentPosition() {
        if (this.audioFile) {
            this.audioFile.getCurrentPosition().then(
                position => {
                    if (position > 0) {
                        this.currentPosition = position;
                    } else {
                        console.log('No Duration: ', position);
                        this.currentPosition = 0.1;
                    }
                }, error => {
                    console.log(error);
                });
        } else {
            console.log('No audioFile');
        }
    }
    dismiss() {
        this.stop();
        this.viewCtrl.dismiss();
    }
    getDuration() {
        if (this.audioFile) {
            // this.duration = Math.floor(this.audioFile.getDuration());
            this.duration = this.audioFile.getDuration();
        }
    }
    startCurrentPositionTimer() {
        this.currentPositionTimer = setInterval(() => {
            this.updateCurrentPosition();
            if (this.duration === 0) {
                this.getDuration();
            }
        }, 400);
        // console.log('Timer: ', this.durationTimer);
    }
    stopCurrentPositionTimer() {
        if (this.currentPositionTimer) {
            clearTimeout(this.currentPositionTimer);
        }
    }
}