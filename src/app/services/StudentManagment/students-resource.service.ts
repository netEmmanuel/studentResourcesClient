import { Injectable } from '@angular/core';
import { department } from './department';
import { faculty } from './faculty';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
// import {student} from '../../models/student'

@Injectable()
export class StudentsResourceService {
  urlPrefix: string;

  constructor( public http:Http) {
    
        console.log('Student Resource Service connected')
        this.urlPrefix = 'https://student-resource-managmentapp.herokuapp.com';
        // this.urlPrefix = 'http://localhost:3000';
        
      }
    //retrive all students
    getstudents(){
      return this.http.get(this.urlPrefix + '/api/studs')
      .map(res=> res.json());
    }
    //save a new student
    poststudents(stud){
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      return this.http.post(this.urlPrefix +'/api/stud', JSON.stringify(stud), {headers:headers})
      .map(res=> res.json());
    }

    //update a student
    updatestudents(id:any, stud){
      let headers = new Headers();
      headers.append('content-type', 'application/json');
      return this.http.put(this.urlPrefix +'/api/stud/'+ id, JSON.stringify(stud), {headers:headers})
      .map(res=> res.json());
    }
    //delete a student
    delstudents(id:any){
      return this.http.delete(this.urlPrefix +'/api/stud/' + id)
      .map(res=> res.json());
    }

     //get single a student
     getsinglestud(id:any){
      return this.http.get(this.urlPrefix +'/api/stud/' + id)
      .map(res=> res.json());
    }
    // getstudentsmodel(){ 
    //   return this.getstudents;
    // }

    // getDepartment() {
    //   return [
    //    new department(1, 'USA' ),
    //    new department(2, 'India' ),
    //    new department(3, 'Australia' )
    //   ];
    // }
    
    // getFaculty() {
    //  return [
    //    new faculty(1, 1, 'Computer Science' ),
    //    new faculty(2, 1, 'Multimedia' ),
    //    new faculty(5, 2, 'Nursing' ),
    //    new faculty(6, 2, 'Accounting'),
    //   ];
    // }
}

