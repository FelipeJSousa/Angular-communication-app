import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title!:string;
  @Output() inc = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick(){
    this.inc.emit(1);
  }
  plusTwoClick(){
    this.inc.emit(2);
  }
  negOneClick(){
    this.inc.emit(-1); 
  }
  negTwoClick(){
    this.inc.emit(-2);
  }

}
