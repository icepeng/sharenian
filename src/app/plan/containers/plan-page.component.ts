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
        margin-left: 24px;
      }
      .hidden {
        display: none;
      }
    `
  ]
})
export class PlanPageComponent implements OnInit {
  hidden = false;

  constructor() {}

  ngOnInit() {}
}
