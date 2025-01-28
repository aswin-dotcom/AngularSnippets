import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { TestRoute2Component } from './test-route-2/test-route-2.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'test-1',component:TestRouteComponent},
  {path:'test-2',component:TestRoute2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
