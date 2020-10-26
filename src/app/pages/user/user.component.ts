import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 
  numbers: any[];
  userForm: FormGroup;
constructor(private fb:FormBuilder,
  private cdr:ChangeDetectorRef){
  this.userForm= this.fb.group({
    name:['',Validators.required],
    address:this.fb.group({
      city:[],
      pincode:[]
    }),
    numbers:this.fb.array([
     this.createNum() 
      
    ])
  })
}
get number():any{
  
  return (this.userForm.get('numbers') as FormArray).controls;
}
createNum():FormGroup{
  
  return this.fb.group({
    label:'',
    num2:''
  })
}




addNum(){
  this.number.push(this.createNum())
}

  ngOnInit() {

  }

  patch(){
    this.userForm.patchValue({
      name:'sankar',
    
    });



this.numbers=[{
  label:'Home',
  num2:34543535
  },
  {
    label:"Office",
    num2:3453455
    },
    {
      label:"Personal",
      num2:5345345
      }]

this.numbers.forEach(element => {

 (this.userForm.get('numbers') as FormArray).controls.push( this.fb.group({
  label:element.label,
  num2:element.num2
}))


  })


}

remove(index){
 
  (this.userForm.get('numbers') as FormArray).removeAt(index)
}
}
