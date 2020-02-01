import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { filter, take } from 'rxjs/operators';
import { Character } from '../../core/models/character.model';
import { DataService } from '../../core/services/data.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
  styles: [
    `
      .mat-column-select {
        overflow: initial;
      }
      table {
        width: 100%;
      }
      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }
      .container {
        height: 80vh;
        overflow: auto;
      }
      :host {
        display: block;
      }
    `
  ]
})
export class PlanTableComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'id',
    'job',
    'level',
    'floor',
    'latestPlay'
  ];
  dataSource = new MatTableDataSource<Character>([]);
  selection = new SelectionModel<Character>(true, []);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dataService: DataService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sort.active = 'floor';
    this.dataSource.sort.direction = 'desc';

    this.dataService.characters$
      .pipe(
        filter(x => !!x),
        take(1)
      )
      .subscribe(characters => {
        this.dataSource.data = characters;
      });

    this.selection.onChange.subscribe(event => this.eventService.emit(event));
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
