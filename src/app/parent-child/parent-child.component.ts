import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild(TimerComponent)
  private timer!: TimerComponent;

  @ViewChild("myp")
  private myp!: ElementRef;

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

  ngAfterViewInit(){
    console.log(this.myp)
  }


}
