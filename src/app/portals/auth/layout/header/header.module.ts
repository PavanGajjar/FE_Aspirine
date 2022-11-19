import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedaerRoutingModule } from './header-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HedaerRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
