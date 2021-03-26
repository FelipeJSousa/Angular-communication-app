import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-names-changes',
  templateUrl: './names-changes.component.html',
  styleUrls: ['./names-changes.component.css']
})
export class NamesChangesComponent implements OnInit, OnChanges {

  @Input() name!: string;
  nameBefore!: string;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    console.log(changes);
    if(changes.hasOwnProperty('name')){
      this.nameBefore = changes['name'].previousValue;
    }
  }

}
