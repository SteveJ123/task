import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissingnumberComponent } from './missingnumber/missingnumber.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ComponentxComponent } from './componentx/componentx.component';
import { ComponentyComponent } from './componenty/componenty.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
// import { FormComponent } from './form/form.component';
// import { FormuseComponent } from './formuse/formuse.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MissingnumberComponent,
    DynamicComponent,
    ComponentxComponent,
    ComponentyComponent,
    PhonenumberComponent,
    ButtonComponent,
    FormvalidationComponent,
    // FormComponent,
    // FormuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ComponentxComponent,
    ComponentyComponent]
})
export class AppModule { }
