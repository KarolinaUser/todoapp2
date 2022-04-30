import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskPage } from './task.page';
import { AddTaskComponentModule } from '../../../projects/todos/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTestServiceModule } from '../../../projects/todos/src/lib/adapters/secondary/infrastructure/firebase-test.service-module';

@NgModule({ imports: [CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: TaskPage,
        }
      ]),
  AddTaskComponentModule,
  FirebaseTestServiceModule,
],
  	declarations: [TaskPage],
  	providers: [],
  	exports: [] })
export class TaskPageModule {
}
