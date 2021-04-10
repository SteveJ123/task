import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComponenttwoComponent } from './componenttwo/componenttwo.component';
import { ComponentthreeComponent } from './componentthree/componentthree.component';
import { ComponentfourComponent } from './componentfour/componentfour.component';
import { ComponentfiveComponent } from './componentfive/componentfive.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [ComponentoneComponent, ComponenttwoComponent, ComponentthreeComponent, ComponentfourComponent, ComponentfiveComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
