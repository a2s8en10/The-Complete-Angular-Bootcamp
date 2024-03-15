import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ifelsecondition';
  show='yes'
  condition(type:string)
  {
    type == 'yes' ? true : false

  }

}
