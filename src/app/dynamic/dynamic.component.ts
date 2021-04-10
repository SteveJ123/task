import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import {ComponentxComponent} from '../componentx/componentx.component';
import {ComponentyComponent} from '../componenty/componenty.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  title="dynamic loading component"

  componentRef:any;
  @ViewChild('dynamicLoadComponent', {read:ViewContainerRef}) entry:ViewContainerRef;
  
  value=[{
  "Id":1,
  "Name": "componentx"
  },
  
  {
  "Id":2,
  "Name": "componenty"
  }]


  constructor(private resolver:ComponentFactoryResolver) { }
  

  ngOnInit(): void {  }

  createComponent(Id){
    if(Id==1){
    const factory= this.resolver.resolveComponentFactory(ComponentxComponent);
    this.componentRef = this.entry.createComponent(factory);
    }else{  
      const factory= this.resolver.resolveComponentFactory(ComponentyComponent);
    this.componentRef = this.entry.createComponent(factory);
    }

}

selectTheName(id){
  console.log("id", id);
	this.createComponent(id);
}
}