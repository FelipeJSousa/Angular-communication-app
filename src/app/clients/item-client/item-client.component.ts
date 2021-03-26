import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client!:Client;
  @Output() updateClient =  new EventEmitter<Client>();
  @Output() deleteClient =  new EventEmitter<Client>();
  name!: string
  age!: number
  onEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
  
  remove(){
    this.deleteClient.emit()
  }

  discard(){
    this.onEdit = false;
  }
  
  save(){
    this.onEdit = false;
    this.client = {name: this.name, age: this.age};
    this.updateClient.emit(this.client)
  }

}
