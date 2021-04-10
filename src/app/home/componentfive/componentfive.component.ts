import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componentfive',
  templateUrl: './componentfive.component.html',
  styleUrls: ['./componentfive.component.css']
})
export class ComponentfiveComponent implements OnInit {

  @Input() childPost: any;
  constructor() { }

  ngOnInit(): void {
  }

}
