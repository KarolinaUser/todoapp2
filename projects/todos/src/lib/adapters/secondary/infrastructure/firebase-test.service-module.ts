import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTestService } from './firebase-test.service';
import { ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';


@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTestService, { provide: ADDS_TASK_DTO, useExisting: FirebaseTestService },],
  	exports: [] })
export class FirebaseTestServiceModule {
}
