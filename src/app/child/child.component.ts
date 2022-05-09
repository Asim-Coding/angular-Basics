import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() company =" wesyy";
  constructor() { 
    console.log("constructor called");
  }
  ngOnChanges(change:SimpleChanges){
    console.log("ng on change called");
  }
    
  ngOnInit() {
    console.log("ngOnInit called");
  }

}

