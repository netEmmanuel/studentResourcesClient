import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {StudentsResourceService} from '../../services/StudentManagment/students-resource.service';
declare var $: any;

@Component({
  selector: 'students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss']
})
export class StudentsDetailsComponent implements OnInit {
  id: number;
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
    public route:ActivatedRoute,
  ) { }
  showNotification(from, align){
    const type = ['warning'];
    $.notify({
        icon: "notifications",
        message: "Student Succesfully Deleted"
    },{
        type: type,
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}
  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Stduent
    this.studentsResourceService.getsinglestud(this.id).subscribe(studs => {
      this.studs = studs;
      // console.log(this.studs);
  });

}
onDeleteClick(){
  if(confirm("Are you sure to delete?")){
    this.studentsResourceService.delstudents(this.id)
    .subscribe(stud =>{
      // this.studs.unshift(stud)
      // console.log(stud.message);
      this.router.navigate(['/']);
      })
    this.showNotification('top', 'right')
  }
}
}
