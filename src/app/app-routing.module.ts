import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';

const routes: Routes = [
  { path: '', component:  MissingnumberComponent},
  { path: 'dynamic', component:  DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
