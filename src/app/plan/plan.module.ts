import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
    MatButtonModule,
    DragDropModule
  ],
  exports: [PlanPageComponent]
})
export class PlanModule {}
