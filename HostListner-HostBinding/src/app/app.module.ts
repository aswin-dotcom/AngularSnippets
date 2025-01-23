import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { hostingdirectives } from '../Directives/Host.directives';
import { hostbindclass } from '../Directives/HostBinding.directives';


@NgModule({
  declarations: [
    AppComponent,
    hostingdirectives,
    hostbindclass

    // hosting
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
