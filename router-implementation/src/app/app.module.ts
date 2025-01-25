import { ComponentRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes=[
  {path:'',redirectTo:'test-1',pathMatch:'full'},
{path:'test-1',component:Test1Component},
  {path:'test-2',component:Test2Component},
  {path:'**',component:NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
