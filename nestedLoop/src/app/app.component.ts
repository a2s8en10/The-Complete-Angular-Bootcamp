import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nestedLoop';
  users=[
    {no_of_Account:2,age: 20, Email : 'sam@gmail.com',Account_name :['Instagram','Twitter']},
    {no_of_Account:4,age: 22, Email : 'peter@gmail.com',Account_name :['Instagram','Twitter','Threads','Facebook']},
    {no_of_Account:2,age: 40, Email : 'anu@gmail.com',Account_name :['Instagram','Twitter']},
    {no_of_Account:5,age: 28, Email : 'relax@gmail.com',Account_name :['Instagram','Twitter','Linkedin','Threads','Facebook']},
  ]
}
