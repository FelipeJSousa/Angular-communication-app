import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercepted-item',
  templateUrl: './intercepted-item.component.html',
  styleUrls: ['./intercepted-item.component.css']
})
export class InterceptedItemComponent implements OnInit {

  private _name!: string;

  @Input()
  set name(name : string){
    this._name = `Your name is ${name}`
  }

  get name():string{
    return this._name;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
