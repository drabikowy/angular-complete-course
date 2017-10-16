import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
  selector: 'courses', // html selector <courses>
  template: `
    <h2> {{ title }} </h2>
    <ul>
      <li *ngFor="let course of courses"> 
        {{ course }}
      </li>
    </ul>
    
    <br>
    <br>
    
    <button class="btn btn-primary" [class.active]="isActive">bootstrap button</button>
    <button class="btn btn-primary" [style.background]="isActive ? 'green' : 'red'">bootstrap button</button>
    <button class="btn btn-secondary" (click)="onSave($event)">bootstrap button</button>
    
    <br>
    <br>
    
    <input [(ngModel)]="mail" (keyup.enter)="onEnterUp()" />
    
    <br>
    <br>
    
    <ul>
      <li> {{ angularCourse.title | uppercase }} </li>
      <li> {{ angularCourse.rating | number: '1.2-2' }} </li>
      <li> {{ angularCourse.students }} </li>
      <li> {{ angularCourse.price | currency:'EUR':true:'3.2-2'}} </li>
      <li> {{ angularCourse.releaseDate | date:'shortDate'}} </li>
      
    </ul>
    
  `
})

export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = false;
  mail = "me@domain.com";
  
  angularCourse = {
    title: "Angular Course",
    rating: 5,
    students: 30110,
    price: 300,
    releaseDate: new Date(2016, 3, 1)
  }
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    
  }
  
  onSave($event) {
    console.log($event.target);
  }
  
  onEnterUp() {
    console.log(this.mail)
  }
  
}