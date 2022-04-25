import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ 
    selector: 'lib-add-task', 
    templateUrl: './add-task.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly addTaskForm:
  FormGroup = new FormGroup({messages: new FormControl()});
}
