import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignUpComponent,
    SignInComponent,
    LoginComponent
  ]
})
export class UserAuthModule { }
