import { Directive, Component, Input } from '@angular/core';
import { ModalController, NavController, NavParams, ModalOptions, ViewController, Platform } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';
import { Device } from 'ionic-native';
import {AudioModalPage} from '../../pages/audio-modal/audio-modal';

// import {AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent, AudioTimePipe, AudioProvider} from 'ionic-audio/dist/ionic-audio';

/*
  Generated class for the AudioModal component.
  See https://angular.io/docs/ts/latest/api/core/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Directive({
  selector: '[audio-modal]',
  host: {
    '(click)': 'showModal()'
  }
})
export class AudioModal {

  // @Input('audio-modal') audioSrc: string;
  location: string = 'media/';
  ios_prefix = '';
  android_prefix = '/android_asset/www/';
  // extension: string = '.mp3';
  extension: string = '.m4a';
  nav: NavController;
  audioModalOptions: ModalOptions = {
    enableBackdropDismiss: true,
    showBackdrop: true
  };

  @Input('audio-modal') audioModal: string;
  @Input('audio-modal-title') audioModalTitle: string;
  @Input() pageId: string;
  @Input() sectionIndex: string;

  constructor(nav: NavController, private mc: ModalController, private platform: Platform) {
    this.nav = nav;

  }

  showModal() {
    let audioModal = this.mc.create(AudioModalPage, { audioSrc: this.getSource(), title: this.audioModalTitle }, this.audioModalOptions);
    audioModal.present(audioModal);
  };

  getSource(): string {
    let prefix = this.ios_prefix;
    if (this.platform.is('android')) {
      prefix = this.android_prefix;
    }
    return prefix + this.location + this.pageId + '_' + (this.sectionIndex + 1) + this.extension;
  }
}