import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
selectedCollapaseCard:any = {};
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedCollapaseCard(id:any) {
    this.selectedCollapaseCard[id]= !this.selectedCollapaseCard[id];
  }
}
