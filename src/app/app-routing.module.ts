import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./portals/corporate/corporate.module').then(m => m.CorporateModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./portals/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "register",
    loadChildren: () => import('./portals/auth/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: "sample",
    loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule)
  },
  {
    path: "sample2",
    loadChildren: () => import('./sample2/sample2.module').then(m => m.Sample2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
