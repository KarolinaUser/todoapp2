import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ 
selector: 'lib-add-form', 
templateUrl: './add-form.component.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush })
export class AddFormComponent {
  readonly tasksForm: 
  FormGroup = new FormGroup({message: new FormControl()});
}


