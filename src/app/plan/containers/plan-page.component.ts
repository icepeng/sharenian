import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styles: [
    `
      :host {
        display: flex;
      }
      .wrapper {
        flex: 50%;
      }
      .wrapper ~ .wrapper {
        margin-left: 24px;
      }
    `
  ]
})
export class PlanPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
