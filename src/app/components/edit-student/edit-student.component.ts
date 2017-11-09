import { Component, OnInit , ChangeDetectionStrategy} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {StudentsResourceService} from '../../services/StudentManagment/students-resource.service';
import {FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import { Student } from '../../models/Student';

declare var $: any;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
    moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id: number;

   studs: Student ={
    id:1,
    firstname:'',
    gender:'',
    nameofschl:'',
    dateofbirth:'',
    middlename:'',
    lastname:'',
    address:'',
    stateorigin:'',
    email:'',
    department:'',
    faculty:'',
    level:0,
    cgpa:0,
    phonenum:0
  }
  constructor(
    public studentsResourceService:StudentsResourceService,
    public router:Router,
    public route:ActivatedRoute,) { }

  ngOnInit() {
    //  Get ID
    this.id = this.route.snapshot.params['id'];
     // Get Stduent
    this.studentsResourceService.getsinglestud(this.id).subscribe(studs => {
    this.studs = studs;
      // console.log(this.studs);  
  });
  }
  editStudent({value, valid}:{value:Student, valid:boolean})
  {
    // console.log(value);
    if(valid)
    {
      this.studentsResourceService.updatestudents(this.id, value)
      .subscribe(data =>{
        // this.studs.put(stud)
        // console.log(data);
        this.router.navigate(['/']);
        this.showNotification('top', 'right')
        })
    }
  }
  showNotification(from, align){
    const type = ['success'];
    $.notify({
        icon: "notifications",
        message: "Student Succesfully Updated"
    },{
        type: type,
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}

  states = [
    {name: 'Abia'},
    {name: 'Adamawa'},

];

genders = [
  {value: 'M', viewvalue: 'Male'},
  {value: 'F', viewvalue: 'Female'},

];
departments = [
  {name: 'Information Communcation Science and Technology'},
  {name: 'multimedia'},
  

];
facultys = [
  {name: 'Computer Science'},
  {name: 'Photography'},

];
levels = [
{value: 100},
{value: 200},
{value: 300},
{value: 400},

];
  
  floatingLabel: string = 'auto';
  color: boolean;
  requiredField: boolean;
  hideRequiredMarker: boolean;
  ctrlDisabled = false;
  textareaNgModelValue: string;
  name: string;
  errorMessageExample1: string;
  errorMessageExample2: string;
  errorMessageExample3: string;
  errorMessageExample4: string;

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

    

  birthday: Date;
  maxBirthday = new Date();


  customErrorStateMatcher: ErrorStateMatcher = {
    isErrorState: (control: FormControl | null) => {
      if (control) {
        const hasInteraction = control.dirty || control.touched;
        const isInvalid = control.invalid;
        return !!(hasInteraction && isInvalid);
      }

      return false;
    }
  }
}
