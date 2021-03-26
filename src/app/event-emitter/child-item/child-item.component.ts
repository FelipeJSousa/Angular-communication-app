import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title!:string;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() negOne = new EventEmitter<any>();
  @Output() negTwo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick(){
    this.plusOne.emit(1);
  }
  plusTwoClick(){
    this.plusTwo.emit(2);
  }
  negOneClick(){
    this.negOne.emit(1); 
  }
  negTwoClick(){
    this.negTwo.emit(2);
  }

}
