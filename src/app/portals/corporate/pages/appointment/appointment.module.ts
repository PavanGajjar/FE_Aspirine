import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    TabMenuModule,
    CalendarModule,
    ReactiveFormsModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
