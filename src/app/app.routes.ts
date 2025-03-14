import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [
    {
        path:'',
        component:RegisterComponent
    },
  
   
    {
        path:'task',
        component:TaskComponent
    }

];
