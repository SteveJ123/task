import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ComponentxComponent } from './componentx/componentx.component';
import { ComponentyComponent } from './componenty/componenty.component';


@NgModule({
  declarations: [
    AppComponent,
    MissingnumberComponent,
    DynamicComponent,
    ComponentxComponent,
    ComponentyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ComponentxComponent,
    ComponentyComponent]
})
export class AppModule { }
