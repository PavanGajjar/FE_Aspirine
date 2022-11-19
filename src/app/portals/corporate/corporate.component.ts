import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  template: `<app-header></app-header>
              <router-outlet></router-outlet>
            <app-footer></app-footer>`
})
export class CorporateComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0); 
  }
}
