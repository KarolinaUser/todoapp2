import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { Observable, takeLast } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { formatCurrency } from '@angular/common';

import Swal from 'sweetalert2'
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';
import { map, tap } from 'rxjs/operators';

@Component({ 
    selector: 'lib-add-task', 
    templateUrl: './add-task.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class AddTaskComponent {
  readonly text: FormGroup = new FormGroup({
    text: new FormControl
    ()});


  get$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
  .pipe( 
    map((task: TaskDTO[]) =>
  task.sort((a, b) => a.created - b.created)),

  tap((task: any) => console.log(task))
  );



  constructor(
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort, 
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
     @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort) {
  }

  onAddButtonClicked(form: FormGroup): void {
    this._addsTaskDto.add({
      text: form.get('text')?.value,
      done: false,
      created: Date.now(),
    });
    this.text.reset();
  }

  onRemoveTaskClicked(id: TaskDTO): void {
    this._removesTaskDto.remove(id.id);
    Swal.fire({
      title: 'Delete Task',
      text: "Are you sure You want to delete this task!?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}

  onTasksCheckeded(task: TaskDTO): void {
    if (task.done) {
    this._setsTaskDto.set({ ...task, done: false}); console.log(task)
  }
  else {
    this._setsTaskDto.set({ ...task, done: true});
  }
}
} 
