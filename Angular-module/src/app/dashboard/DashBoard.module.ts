import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../Shared.module";

@NgModule({
  declarations:[
    DashboardComponent
  ],
  exports:[
    DashboardComponent,
    SharedModule
  ],
  imports:[
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule{}
