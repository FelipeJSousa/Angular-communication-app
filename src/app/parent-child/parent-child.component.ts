import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild(TimerComponent)
  timer!: TimerComponent;

  constructor() { }

  ngOnInit(): void {
  }


  start(){
    this.timer.start();
  }

  stop(){
    this.timer.stop();
  }

  clear(){
    this.timer.clear();
  }



}
