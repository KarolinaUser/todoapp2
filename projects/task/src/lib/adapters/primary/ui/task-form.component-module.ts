import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TaskFormComponent],
  	providers: [],
  	exports: [TaskFormComponent] })
export class TaskFormComponentModule {
}
