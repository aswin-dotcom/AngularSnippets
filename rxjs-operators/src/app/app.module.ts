import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranformDataComponent } from './tranform-data/tranform-data.component';
import { ChainOperatorsComponent } from './chain-operators/chain-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    TranformDataComponent,
    ChainOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
