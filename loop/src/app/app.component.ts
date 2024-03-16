import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loop';
  user=['anu','relax','anurag']
  userinfo=[
    {name:'anu', email: 'anu@amil.com', phone:213244},
    {name:'relax', email: 'relax@amil.com', phone:21433244},
    {name:'anurag', email: 'anurag@amil.com', phone:25676767},
    {name:'pride', email: 'pride@amil.com', phone:2136545656},
  ];
}
