import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ControlAction } from 'src/app/model/controlAction';

@Component({
  selector: 'player-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent implements OnInit {
  @Output('controlClicked') controlClicked: EventEmitter<ControlAction> = new EventEmitter();
  videoPlaying:boolean = false;
  isMuted:boolean = false;
  volume:number;
  constructor() { }

  ngOnInit() {
  }

  emitEvent(actionClicked: string, initiaterObj: any){
    let valueToPass:number;
    switch(actionClicked){
      case "playpause":
        this.videoPlaying = !this.videoPlaying
        break;
      case "reload":
        this.videoPlaying = true;
        break;
      case "seekvolume":
        valueToPass = initiaterObj.value;
        this.isMuted = initiaterObj.value == 0;
    }

    this.controlClicked.emit({action:actionClicked, defineValue: valueToPass});
  }
}
