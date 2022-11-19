import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPage(navLinkId: string = "") {
    window.scrollTo(0, 0);
  }

  navigateToContactUs(navLinkId: string = "") {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    let yAXis = 2500;
    if(vh > 700 && vh < 900){
      yAXis = 3300;
    }
    setTimeout(()=>{
    window.scrollTo(0, yAXis);
    },0)
  }

  navigateToMarketPlace(){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/marketplace/home'])
    );
    window.open(url, '_blank');
  }
}
