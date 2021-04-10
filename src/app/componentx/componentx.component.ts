import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
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
  @ViewChild("dynamicLoadComponent", {read:ViewContainerRef}) entry:ViewContainerRef;    
  
  

  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createComponentx(){    
    const factory= this.resolver.resolveComponentFactory(ComponentxComponent);
  this.componentRef = this.entry.createComponent(factory);
  

}

  createComponenty(){    
      const factory= this.resolver.resolveComponentFactory(ComponentyComponent);
    this.componentRef = this.entry.createComponent(factory);
    

}

  setTab(tabname: string) {
    console.log("test");
  }

  editText(){
    this.isdisabled = false;
  }

  saveText(){
    this.isdisabled = true;
  }

}
