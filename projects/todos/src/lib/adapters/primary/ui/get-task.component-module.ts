import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTaskComponent } from './get-task.component';

@NgModule({ imports: [CommonModule],
  	declarations: [GetTaskComponent],
  	providers: [],
  	exports: [GetTaskComponent] })
export class GetTaskComponentModule {
}
