import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {
      id:number= 0
      studentForm: FormGroup = new FormGroup({

      name: new FormControl(),
      gender: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl (),
      batch: new FormControl (),
     
      address:new FormGroup({
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl (),
        pincode: new FormControl()
      }),
      sourceType:new FormControl(),
      sourceForm: new FormControl(),
      referralName:new FormControl(),

      company:new FormGroup({
          name: new FormControl(),
          location: new FormControl(),
          package: new FormControl(),
          offerDate: new FormControl()

      }),

      education: new FormArray([])
  });

  get educationFormCard(){
    return this.studentForm.get('education') as FormArray;
  }

  addEducation(){
    this.educationFormCard.push(
      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage:new FormControl()
      })
    )
  }

constructor (private createstudent: StudentService,private activatedRoute:ActivatedRoute){

  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id= data.id;

      createstudent.getstudentview(this.id).subscribe(
        (data:any)=>{
          this.studentForm.patchValue(data);
        }
      )
    }
  )
}

  onSubmit(){
    if(this.id){
      this.createstudent.updateStudent(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Update Successfully");
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )

    }
    else{
    console.log(this.studentForm.value);
    this.createstudent.createstudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Student Create Successfully");
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}

  removeEducation(i:number){
    this.educationFormCard.removeAt(i);
  }

}