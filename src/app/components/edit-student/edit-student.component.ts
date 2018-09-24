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

    _keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;
      let inputChar = String.fromCharCode(event.charCode);
  
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
  }

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
        this.showNotification('top', 'center')
        })
    }
  }
  showNotification(from, align){
    const type = ['success'];
    $.notify({
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
    {
    "id": 1,
    "name": "Abia State"
  },
  {
    "id": 2,
    "name": "Adamawa State"
  },
  {
    "id": 3,
    "name": "Akwa Ibom State"
  },
  {
    "id": 4,
    "name": "Anambra State"
  },
  {
    "id": 5,
    "name": "Bauchi State"
  },
  {
    "id": 6,
    "name": "Bayelsa State"
  },
  {
    "id": 7,
    "name": "Benue State"
  },
  {
    "id": 8,
    "name": "Borno State"
  },
  {
    "id": 9,
    "name": "Cross River State"
  },
  {
    "id": 10,
    "name": "Delta State"
  },
  {
    "id": 11,
    "name": "Ebonyi State"
  },
  {
    "id": 12,
    "name": "Edo State"
  },
  {
    "id": 13,
    "name": "Ekiti State"
  },
  {
    "id": 14,
    "name": "Enugu State"
  },
  {
    "id": 15,
    "name": "Federal Capital Territory"
  },
  {
    "id": 16,
    "name": "Gombe State"
  },
  {
    "id": 17,
    "name": "Imo State"
  },
  {
    "id": 18,
    "name": "Jigawa State"
  },
  {
    "id": 19,
    "name": "Kaduna State"
  },
  {
    "id": 20,
    "name": "Kano State"
  },
  {
    "id": 21,
    "name": "Katsina State"
  },
  {
    "id": 22,
    "name": "Kebbi State"
  },
  {
    "id": 23,
    "name": "Kogi State"
  },
  {
    "id": 24,
    "name": "Kwara State"
  },
  {
    "id": 25,
    "name": "Lagos State"
  },
  {
    "id": 26,
    "name": "Nasarawa State"
  },
  {
    "id": 27,
    "name": "Niger State"
  },
  {
    "id": 28,
    "name": "Ogun State"
  },
  {
    "id": 29,
    "name": "Ondo State"
  },
  {
    "id": 30,
    "name": "Osun State"
  },
  {
    "id": 31,
    "name": "Oyo State"
  },
  {
    "id": 32,
    "name": "Plateau State"
  },
  {
    "id": 33,
    "name": "Rivers State"
  },
  {
    "id": 34,
    "name": "Sokoto State"
  },
  {
    "id": 35,
    "name": "Taraba State"
  },
  {
    "id": 36,
    "name": "Yobe State"
  },
  {
    "id": 37,
    "name": "Zamfara State"
  }

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
