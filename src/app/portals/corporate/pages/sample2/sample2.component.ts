import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { spearPartsDetails } from 'src/app/sample/sample.component';
import { isDefined } from 'src/app/shared/common';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.scss']
})
export class Sample2Component implements OnInit {

  filteredData: any = null;
  partsDetails: Array<any> = spearPartsDetails;
  selectedpart: any = null;
  display: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    let routeData = this.route.snapshot.queryParams["params"];
    if (isDefined(routeData) && routeData != null) {
      this.filteredData = JSON.parse(routeData);
      console.log(routeData);
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }

  ngOnInit(): void {

  }

  openPartDetails(part) {
    this.selectedpart = part;
    this.display = true;
  }
}