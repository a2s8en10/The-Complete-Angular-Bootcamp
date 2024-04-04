import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import{FormsModule}from'@angular/forms';

@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    BasicComponent

  ]
})
export class FromModule { }
