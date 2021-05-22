import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-missingnumber',
  templateUrl: './missingnumber.component.html',
  styleUrls: ['./missingnumber.component.css']
})
export class MissingnumberComponent implements OnInit {

  displayValue;

  // test1 = [1, 2, 3, 4, 5, 6, 7, 8];
  // test1Sort = this.test1.sort();
  // test2 = [4, 3, 2, 1];
  // test2Sort = this.test2.sort();

  myForm:FormGroup;

  color;

  public colorSelector = {
    "text-blue": true,
    "text-green": false,
    "text-yellow": false,
  }

  constructor() { }  ngOnInit(): void {
  }

// squared number eg
// T1=1^2+1=2 here n=1 odd add 1
// T2=2^2-1=3 Herr n=2 even subtract 1
// T3=3^2+1=10 here n=3 odd add 1
// So on ........
// T8=8^2-1=63 here nis even subtract 1

findNumber(val){    
  console.log(val);
  if(val%2 == 0 ){
    let result = (val*val)-1;
    this.displayValue = result;
  }else{
    let result = (val*val)+1;
    this.displayValue = result;
  }
    
  
  
  
    // if(n%2==0){
    // new= (n^2)-1;
    // }
    // else{
    // new= (n*n)+1;
    // }

}

changeColor(colorchange){
  this.color = colorchange;
}

downloadFile(){
  saveAs("http://161.35.229.33:8002/media/policy/Linking_Policy_1_kx862pP.pdf", "filename.pdf");
}

}
