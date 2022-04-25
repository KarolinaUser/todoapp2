import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFormComponent } from './add-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddFormComponent],
  	providers: [],
  	exports: [AddFormComponent] })
export class AddFormComponentModule {
}
