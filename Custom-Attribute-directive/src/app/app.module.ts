import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { background_color } from '../Directives/Color.directives';
import { customrender } from '../Directives/render.directives';

@NgModule({
  declarations: [
    AppComponent,
    background_color,
    customrender
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
