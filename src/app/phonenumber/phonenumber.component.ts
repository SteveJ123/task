import { Component, OnInit } from '@angular/core';
import {FormArray} from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {

  name = new FormControl('');

  mobileNumbers = [];
  deleteButtonFlag = false;

  constructor(private fb:FormBuilder) {  }

  ngOnInit(): void {
  }

  userProfileForm = this.fb.group({
    mobiles: this.fb.array([
      this.fb.control('')
    ])
    })

    get mobiles(){
      return this.userProfileForm.get('mobiles') as FormArray;
    }

    addNewMobile(e){
      e.preventDefault();
      this.deleteButtonFlag = true;
      this.mobiles.push(this.fb.control(''));
    }

    counter;

    onSubmit(){
      this.counter = 0;
      for(let mobile of this.mobiles.controls){
        let phoneText = "phoneNumber" + (this.counter+1);
        this.mobileNumbers.push({[phoneText]: this.userProfileForm.get(['mobiles', this.counter]).value})        
        this.counter += 1;
      }      
      console.log("mobile numbers", this.mobileNumbers);
    }


}
