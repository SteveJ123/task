import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componenttwo',
  templateUrl: './componenttwo.component.html',
  styleUrls: ['./componenttwo.component.css']
})
export class ComponenttwoComponent implements OnInit {

    @Input() childPost: any;
  constructor() { }

  ngOnInit(): void {
  }

}
