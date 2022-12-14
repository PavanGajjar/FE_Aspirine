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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
