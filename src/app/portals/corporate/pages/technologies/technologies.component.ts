import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
highlightVal = '';
  page='Technologies Page';
  powerOfData: Array<any> = [
    {
      imageName: "data-icon.svg",
      label: "Blockchain",
      content: "We link all participants in a secure distributed ledger that facilitates tracking & traceability,  financial settlements, and much more."
    },
    {
      imageName: "data-driven-icon.svg",
      label: "Internet of Things ",
      content: "We collect real-time data from myriad sensors to provide continuous visibility of all produce throughout the journey."
    },
    {
      imageName: "data-trace-icon.svg",
      label: "Big Data Analytics",
      content: "We execute advanced mining and analytics of massive blockchain datasets for actionable insights that inform better decision-making."
    },
    {
      imageName: "data-compliance-icon.svg",
      label: "Artificial Intelligence",
      content: "We apply AI to customize data reports and alerts, and read and display resources and trends."
    },
    {
      imageName: "software_as_service.png",
      label: "Software as a Service",
      content: "Our SaaS model delivers lower costs, on-demand scalability and rapid deployment."
    },
    {
      imageName: "auto_cost.png",
      label: "AWS Cloud",
      content: "We store data in the AWS cloud where it is replicated, secure, and immediately and always available."
    },
  ]

  responsiveOptions = [
    {
      breakpoint: '1798px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    }
  ];
  constructor() { }

  ngOnInit(): void {
    const values = [ 'BC', 'IOT', 'BDA', 'AI', 'SAS', 'AC'];
    let index = 0;
    setInterval(() => {
    this.highlightVal = values[index];
     index===5 ? index = 0: index++;
    }, 2000);
  }

}
