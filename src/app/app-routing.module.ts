import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { TaskPageModule } from './pages/task.page-module';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'task', 
        loadChildren: () => TaskPageModule
      },
      { 
        path: 'todos', component: TodosComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
