import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, ViewChildren } from '@angular/core';
import {ComponentyComponent} from '../componenty/componenty.component';


@Component({
  selector: 'app-componentx',
  templateUrl: './componentx.component.html',
  styleUrls: ['./componentx.component.css']
})
export class ComponentxComponent implements OnInit {

  buttonText = "tabname";
  isdisabled = true;
  // dynamicLoadComponent = "dynamicLoadComponent";
  
  componentRef:any;
  @ViewChild("dynamicLoadComponent", {read:ViewContainerRef}) dynamicLoadComponent;  

  componentRef2:any;
  @ViewChild("dynamicLoadComponent2", {read:ViewContainerRef}) dynamicLoadComponent2;  
  
  

  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createComponentx(){    
    const factory= this.resolver.resolveComponentFactory(ComponentxComponent);
  this.componentRef2 = this.dynamicLoadComponent2.createComponent(factory);  

}

  createComponenty(){    
      const factory= this.resolver.resolveComponentFactory(ComponentyComponent);
    this.componentRef = this.dynamicLoadComponent.createComponent(factory);
    

}
  

  editText(){
    this.isdisabled = false;
  }

  saveText(){
    this.isdisabled = true;
  }

}
