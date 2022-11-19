import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CheckboxModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
