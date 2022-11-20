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
  ngAfterViewInit(): void {
    $(".home-container a").on("click", function () {
      window.scrollTo(0, 0);
    })
    $(".nav-item a").on("click", function () {
      window.scrollTo(0, 0);
    });
  }
  openCloseNavbar(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
  }
  isActiveRoute(routeString: string): boolean {
    return this.router.url.includes(routeString);
  }
  navigateToPage(navLinkId: string = "") {
    window.scrollTo(0, 2500);
  }
}
