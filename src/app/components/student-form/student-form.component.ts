import { faculty } from './../../services/StudentManagment/faculty';
import { department } from './../../services/StudentManagment/department';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatSnackBar} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {StudentsResourceService} from '../../services/StudentManagment/students-resource.service';

declare var $: any;
let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  // countryid:any;
  studs: any[] =[];
  // departments: department[];
  // facultys: faculty[];
  stud ={
    id:'',
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
    level:'',
    cgpa:'',
    phonenum:''
  }
   
  constructor(
    public studentsResourceService:StudentsResourceService,
    public router:Router,
    public route:ActivatedRoute
  )  
  {
    
    //   this.studentsResourceService.getstudents()
    //   .subscribe(studs =>{
    //     console.log(studs);
    //     this.studs = studs;
    // })

    // this.departments = this.studentsResourceService.getDepartment();
  }
  addStudent({valid}:{valid:boolean})
  {
    if(valid)
    {
      this.studentsResourceService.poststudents(this.stud)
      .subscribe(stud =>{
        this.studs.push(stud)
        // console.log(stud.message);
        this.router.navigate(['/']);
        this.showNotification('top', 'right')
        })
    }
  }

  showNotification(from, align){
    const type = ['success'];
    $.notify({
        icon: "notifications",
        message: "Student Succesfully Added"
    },{
        type: type,
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}

 

  // onSelect(countryid) {
    // console.log(countryid)
    // this.facultys = this.studentsResourceService.getFaculty().filter((item)=> item.countryid == countryid);
  // }

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

