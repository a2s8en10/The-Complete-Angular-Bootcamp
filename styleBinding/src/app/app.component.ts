import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'styleBinding';
  color = "red"
  bgcolor="blue"
  updatecolor()
  {
    this.color = "blue"
    this.bgcolor= "red"
  }
}
