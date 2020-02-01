import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { PlanGridComponent } from './containers/plan-grid.component';
import { PlanPageComponent } from './containers/plan-page.component';
import { PlanTableComponent } from './containers/plan-table.component';
import { BoxComponent } from './components/box.component';

@NgModule({
  declarations: [PlanPageComponent, PlanTableComponent, PlanGridComponent, BoxComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  exports: [PlanPageComponent]
})
export class PlanModule {}
