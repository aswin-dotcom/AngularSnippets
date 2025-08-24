import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatComponent } from './dashboard/stat/stat.component';
import { TaskComponent } from './dashboard/task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'stat', component: StatComponent },
      { path: 'task', component: TaskComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
