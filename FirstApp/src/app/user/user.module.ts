import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
