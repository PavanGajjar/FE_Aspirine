import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample2RoutingModule } from './sample2-routing.module';
import { Sample2Component } from './sample2.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    Sample2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Sample2RoutingModule,
    DropdownModule,
    ButtonModule,
    DialogModule
  ]
})
export class Sample2Module { }
