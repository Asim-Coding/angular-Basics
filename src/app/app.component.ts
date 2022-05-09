import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  // property with a type of value 
  value:any;

  submitbtn(company){
    this.value=company.value;
    // now se dend this.value as a child component
  }
}


