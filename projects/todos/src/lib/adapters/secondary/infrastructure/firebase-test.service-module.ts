import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTestService } from './firebase-test.service';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { GETS_ALL_TASK_DTO } from '../../../application/ports/secondary/gets-all-task.dto-port'; 
import { REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTestService, { provide: ADDS_TASK_DTO, useExisting: FirebaseTestService }, { provide: GETS_ALL_TASK_DTO, useExisting: FirebaseTestService }, { provide: REMOVES_TASK_DTO, useExisting: FirebaseTestService }],
  	exports: [] })
export class FirebaseTestServiceModule {
}
