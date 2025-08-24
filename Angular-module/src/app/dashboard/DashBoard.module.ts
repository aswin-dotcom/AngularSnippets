import { Component, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared.module';
import { TaskComponent } from './task/task.component';
import { StatComponent } from './stat/stat.component';
import { AppRoutingModule } from '../app-routing.module';
import { Route, RouterModule, Routes } from '@angular/router';
import { CounterserviceService } from '../counterservice.service';
// import { TaskComponent } fro./task/task.componentent';
  const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      children: [
        { path: 'task', component: TaskComponent },
        { path: 'stat', component: StatComponent },
      ],
    },
  ];
@NgModule({
  declarations: [DashboardComponent, TaskComponent, StatComponent],
  exports: [DashboardComponent, SharedModule, RouterModule],
  imports: [
    CommonModule,
    SharedModule,
    // AppRoutingModule,
    RouterModule.forChild(routes),
  ],
  providers:[CounterserviceService]
})
export class DashboardModule {}
