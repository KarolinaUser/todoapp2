import { InjectionToken } from '@angular/core';
import { TaskDTO } from './task.dto';

export const ADDS_TASK_DTO = new InjectionToken<AddsTaskDtoPort>('ADDS_TASK_DTO');

export interface AddsTaskDtoPort {
  [x: string]: any;
  add(task: Partial<TaskDTO>): void;
}
