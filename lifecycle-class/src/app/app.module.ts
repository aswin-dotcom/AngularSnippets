import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { GrandchildrenComponent } from './app-child/grandchildren/grandchildren.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    GrandchildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
