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
  _keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
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
        this.showNotification('top', 'center')
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

