import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {StudentsResourceService} from '../../services/StudentManagment/students-resource.service';
import { Router, ActivatedRoute } from '@angular/router';
// import {animate, state, style, transition, trigger} from '@angular/animations';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/startWith'

/**
 * @title Basic table
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit{
  
  studs: any[];
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
  )  {}
  ngOnInit() {
    this.studentsResourceService.getstudents()
    .subscribe(studs =>{
      // console.log(studs);
      this.studs= studs;
  })
  }
}



 