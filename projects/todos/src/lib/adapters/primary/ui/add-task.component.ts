import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';



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

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,) {
  }

  onAddButtonClicked(form: FormGroup): void {
    this._addsTaskDto.add({
      text: form.get('text')?.value,
      done: false,
    });
    this.text.reset();
  }
}
