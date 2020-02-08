import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Character } from '../../core/models/character.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-plan-grid',
  templateUrl: './plan-grid.component.html',
  styles: [
    `
      :host {
        display: block;
      }
      .example-container {
        width: 400px;
        max-width: 100%;
        margin: 0 25px 25px 0;
        display: inline-block;
        vertical-align: top;
      }

      .example-list {
        border: solid 1px #ccc;
        min-height: 60px;
        background: white;
        border-radius: 4px;
        overflow: hidden;
        display: block;
      }

      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      .example-box:last-child {
        border: none;
      }

      .example-list.cdk-drop-list-dragging
        .example-box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ]
})
export class PlanGridComponent implements OnInit {
  team0: Character[] = [];
  team1: Character[] = [];
  team2: Character[] = [];
  team3: Character[] = [];
  team4: Character[] = [];
  team5: Character[] = [];
  team6: Character[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.event$.subscribe(event => {
      this.team0 = [...this.team0, ...event.added];
      this.team0 = this.team0.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team1 = this.team1.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team2 = this.team2.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team3 = this.team3.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team4 = this.team4.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team5 = this.team5.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
      this.team6 = this.team6.filter(
        x => !event.removed.find(y => x.id === y.id)
      );
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
