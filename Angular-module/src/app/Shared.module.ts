import { NgModule } from "@angular/core";
import { LoaderComponent } from "./loader/loader.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    // AppComponent,
     LoaderComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent
  ]
})
export class SharedModule { }
