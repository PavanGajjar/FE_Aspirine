import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {  }

  navigateToPage(navLinkId: string = "") {
    window.scrollTo(0, 2450);
  }
}
