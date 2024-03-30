import { Component } from '@angular/core';
import { cwd } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revision';
  getname(){
    alert("function called")
  }
  getpara(name:string){
    alert(name)
  }
  displayval =''
  getvalue(val:string){
    console.warn(val);
    this.displayval=val
  }
  count =0
  counter(type:string)
  {
    type === 'add'? this.count++ :this.count--
  }
}
