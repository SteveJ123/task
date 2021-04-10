import { Component, OnInit } from '@angular/core';
import {ComponenttwoComponent} from '../componenttwo/componenttwo.component';
import {ComponentthreeComponent} from '../componentthree/componentthree.component';
import {ComponentfourComponent} from '../componentfour/componentfour.component';
import {ComponentfiveComponent} from '../componentfive/componentfive.component';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css']
})
export class ComponentoneComponent implements OnInit {

  parentPost;
  constructor() { }

  ngOnInit(): void {
  }

  addText(value){
    console.log("test", value);
    this.parentPost = value;
  }

}
