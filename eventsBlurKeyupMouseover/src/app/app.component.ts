import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventsBlurKeyupMouseover';
  getvalue(){
    console.log("function called")
  }
  getdata(name:string){
    console.log(name)
  }
  getnum(num:number){
    console.log(num)
  }
}
