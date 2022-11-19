import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateRoutingModule } from './corporate-routing.module';
import { CorporateComponent } from './corporate.component';
import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';

@NgModule({
  declarations: [
    CorporateComponent
  ],
  imports: [
    CommonModule,
    CorporateRoutingModule,
    HeaderModule,
    FooterModule
  ],
  exports: []
})
export class CorporateModule { }
