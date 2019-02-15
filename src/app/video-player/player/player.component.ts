import { Component, OnInit } from '@angular/core';
import { ControlAction } from 'src/app/model/controlAction';

@Component({
  selector: 'player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  videoLoaded:boolean = false;
  videoDuration:number = 0;
  constructor() { }

  ngOnInit() {
  }
  processMetaData(videoPlayer){
    var self = this;
    this.videoLoaded = true;
    videoPlayer.volume = 0.5;
    this.videoDuration = 100;//this.secondsToMinutesAndSeconds(moviePlayer.duration);
    //console.log(videoPlayer.videoWidth);
    //console.log(videoPlayer.videoHeight);
  }

  handleControlClicked(controlAction: ControlAction, videoPlayer){
    console.log(controlAction.action);
    switch(controlAction.action){
      case "playpause":
        if (videoPlayer.paused) {
          videoPlayer.play();
        }
        else {
          videoPlayer.pause();
        }
        break;
      case "reload":
        videoPlayer.currentTime = 0;
        if (videoPlayer.paused) {
          videoPlayer.play();
        }
      case "volume_up":
        videoPlayer.currentTime = 0;
        if (videoPlayer.paused) {
          videoPlayer.play();
        }
      case "volume_down":
        videoPlayer.currentTime = 0;
        if (videoPlayer.paused) {
          videoPlayer.play();
        }
      case "seekvolume":
        videoPlayer.volume = controlAction.defineValue/100;
        console.log(videoPlayer.volume);
        break;
    }
  }
}
