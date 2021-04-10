import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentxComponent } from './componentx/componentx.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

const routes: Routes = [
  { path: '', component:  MissingnumberComponent},  
  { path: 'componentx', component:  ComponentxComponent},
  { path: 'phonenumber', component:  PhonenumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
