import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../Shared.module";
import { TaskComponent } from "./task/task.component";
import { StatComponent } from './stat/stat.component';
import { AppRoutingModule } from "../app-routing.module";
import { RouterModule } from "@angular/router";
// import { TaskComponent } fro./task/task.componentent';

@NgModule({
  declarations:[
    DashboardComponent,
    TaskComponent,
    StatComponent
  ],
  exports:[
    DashboardComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    RouterModule
]
})
export class DashboardModule{}
