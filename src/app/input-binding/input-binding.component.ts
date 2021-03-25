import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') name: string = "";
  @Input() lastname: string = "";
  @Input() age:number = 0;

  clients: Client []

  constructor() {
    this.clients =[
      {id:1, name: "Bob", age: 30 },
      {id:2, name: "Lia", age: 29 },
      {id:3, name: "Mark", age: 20 },
      {id:4, name: "Joe", age: 37 }
    ]
  }

  ngOnInit(): void {
    console.log("show")
    console.log(this.clients)
  }
}
