import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample2Component } from './sample2.component';

const routes: Routes = [
  {
    path: "",
    component: Sample2Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample2RoutingModule { }
