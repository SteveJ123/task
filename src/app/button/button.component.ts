import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, ViewChildren } from '@angular/core';
import {ComponentxComponent} from '../componentx/componentx.component';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  counter = 1;

  componentRef2:any;
  @ViewChild("dynamicLoadComponent2", {read:ViewContainerRef}) dynamicLoadComponent2;  

  constructor(private resolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  createComponentx(){    
    this.counter += 1;
    console.log("counter", this.counter);
    const factory= this.resolver.resolveComponentFactory(ComponentxComponent);
    this.componentRef2 = this.dynamicLoadComponent2.createComponent(factory);  
    

}

}
