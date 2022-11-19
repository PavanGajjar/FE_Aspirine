import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.vw = event.target.innerWidth;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $(".link-btn a").on("click", function () {
      window.scrollTo(0, 0);
    })
    $(".link-btn img").on("click", function () {
      window.scrollTo(0, 0);
    })
  }

  openWatchProductTour() {
    var url = 'https://www.youtube.com/watch?v=gq0zGh3wbbM';
    window.open(url, '_blank');
  }

  navigateToMarketPlace() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/marketplace/home'])
    );
    window.open(url, '_blank'); 
  }
}
