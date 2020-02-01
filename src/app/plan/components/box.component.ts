import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styles: [
    `
      :host {
        display: block;
      }
      .example-box {
        padding: 20px 10px;
        border-bottom: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: move;
        background: white;
        font-size: 14px;
      }
    `
  ]
})
export class BoxComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit() {}
}
