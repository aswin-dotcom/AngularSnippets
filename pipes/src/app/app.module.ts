import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { learnPipe } from './pipes/learning.pipe';
import { filterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    learnPipe,
    filterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
