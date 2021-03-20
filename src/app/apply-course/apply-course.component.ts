import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course.component.html',
  styleUrls: ['./apply-course.component.css']
})
export class ApplyCourseComponent implements OnInit {

  constructor(private comserv: ServiceService, private route: Router) { }

  myCourseForm: FormGroup;
  submitButtonClicked:boolean =false;

  ngOnInit(): void {

    this.myCourseForm = new FormGroup({
      'traineeName' : new FormControl('', [this.requiredValidation, this.nameValidation]),
      'course' : new FormControl(null, [this.requiredValidation]),
      'myDate' : new FormGroup({
        'joiningDate' : new FormControl('', [this.requiredValidation]),
        'courseDate' : new FormControl('', [this.requiredValidation])
      }, [this.dateValidation])
    });
  }
  
  nameValidation(control: FormControl){
    if (control && (control.value !== null || control.value !== undefined)) {
      const regex = new RegExp('^[a-zA-Z ]{3,26}$');
      if (!regex.test(control.value)) {
        return { 'invalidName': true };
      }
    }
    return null;
  }

  requiredValidation(control: FormControl){
    if (control.value == null || control.value == undefined || control.value === '') {
      return { 'required': true };
    }
    return null;
  }

  dateValidation(control: FormControl){
    if (control && (control.value !== null || control.value !== undefined)) {
      // const courseDate = control.value;
      const courseDate = control.root.get('myDate.courseDate')?.value;
      const joinDate = control.root.get('myDate.joiningDate')?.value;
      if(joinDate>courseDate){
        return { 'invalidDate' : true };
      }
    }
    return null;
  }

  onSubmit(){

    this.submitButtonClicked=true;
    if(this.myCourseForm.untouched){
      alert("Please fill the deatails and then click submit");
    }
    else{
    
      if (this.myCourseForm.valid) {

        this.comserv.storeData({
          'id' : new Date().toString(),
          'traineename' : this.myCourseForm.get('traineeName').value,
          'courseName' : this.myCourseForm.get('course').value,
          'joiningdate' : this.myCourseForm.get('myDate.joiningDate').value,
          'coursedate' : this.myCourseForm.get('myDate.courseDate').value
        });
        alert("Your Data is saved, you will be redirected to view course");
        this.route.navigateByUrl('view');
      } 
  }

  }

}
