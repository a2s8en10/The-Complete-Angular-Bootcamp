import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'makeAndCallFunctionOnButtonClick';
  getwarning()
  {
    alert("Warning")
    alert("Do Not Exist")
  }
  getpara(name:any){
    alert(name)
  }

}
