import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetInputBoxValueAndDisplay';
  displayshow = '';
  getvalue(name:string)
  {
    console.log(name)
    this.displayshow = name;
  }
}
