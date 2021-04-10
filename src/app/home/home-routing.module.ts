import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentoneComponent } from './componentone/componentone.component';


const routes: Routes = [
  { path: '', component: ComponentoneComponent},  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
