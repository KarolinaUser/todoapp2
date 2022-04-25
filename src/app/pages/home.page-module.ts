import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DataPickerComponentModule } from '../../../projects/todos/src/lib/adapters/primary/ui/data-picker.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  DataPickerComponentModule,
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
