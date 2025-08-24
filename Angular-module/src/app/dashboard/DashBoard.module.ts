import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    DashboardComponent
  ],
  exports:[
    DashboardComponent
  ],
  imports:[
    CommonModule
  ]
})
export class DashboardModule{}
