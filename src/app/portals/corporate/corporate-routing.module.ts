import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateComponent } from './corporate.component';

const routes: Routes = [
  {
    path: "",
    component: CorporateComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: "technologies",
        loadChildren: () => import('./pages/technologies/technologies.module').then(m => m.TechnologiesModule)
      },
      {
        path: "contact-us",
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateRoutingModule { }
