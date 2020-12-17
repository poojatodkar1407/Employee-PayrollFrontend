import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';
import { EmployeeListDashComponent } from './Component/employee-list-dash/employee-list-dash.component';
const routes: Routes = [
  { path: '', component: EmployeeListDashComponent },
  {path: 'create', component: EmployeeListComponent},
  {path: 'create/:id', component: EmployeeListComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



