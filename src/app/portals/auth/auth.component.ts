import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: `./auth.component.html`
})
export class AuthComponent implements OnInit {
  isRegisterPage: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
