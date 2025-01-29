import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { custom } from '../Directives/custom.directives';
import { conditionaldirective } from '../Directives/conditional.directives';
import { CustomerClassDirectivesComponent } from './customer-class-directives/customer-class-directives.component';
import { customclassdirective } from '../Directives/class.directives';
import { styledirective } from '../Directives/style.directives';

@NgModule({
  declarations: [
    AppComponent,
    custom,
    conditionaldirective,
    CustomerClassDirectivesComponent,
    customclassdirective,
    styledirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
