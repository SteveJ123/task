import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ComponentxComponent } from './componentx/componentx.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';

const routes: Routes = [
  { path: '', component:  MissingnumberComponent},  
  { path: 'componentx', component:  ButtonComponent},
  { path: 'phonenumber', component:  PhonenumberComponent},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
