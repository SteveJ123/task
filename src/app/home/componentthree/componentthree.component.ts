import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentthree',
  templateUrl: './componentthree.component.html',
  styleUrls: ['./componentthree.component.css']
})
export class ComponentthreeComponent implements OnInit {

  @Input() childPost: any;

  constructor() { }

  ngOnInit(): void {
  }

}
