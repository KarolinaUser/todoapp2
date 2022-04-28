import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ 
    selector: 'lib-add-task', 
    templateUrl: './add-task.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly text: FormGroup = new FormGroup({
    text: new FormControl
    ()});

  public items = [] as any[]; 
  public newTask: any;
  
 public addToList() {
 if (this.newTask == []) {
 }
 else {
 this.items.push(this.newTask)
 this.newTask = [];
 }

 }
 public deleteTask(index: any) {
 this.items.splice(index, 1);
 }

 public cancel() {
 if (this.newTask == []) {
}
else {
this.items.splice(this.newTask)
this.newTask = [];
}
 }




}
