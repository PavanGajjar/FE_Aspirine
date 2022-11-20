import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SampleRoutingModule,
    DropdownModule,
    ButtonModule,
    TabMenuModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  exports: [
    SampleComponent
  ]
})
export class SampleModule { }
