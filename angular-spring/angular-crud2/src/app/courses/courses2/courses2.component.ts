import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.scss']
})
export class Courses2Component {

  //por padrão no javascript, tudo é público, exceto explicitamente private
  //referência de variavel é sempre publico
  courses: Observable<Course[]>;
  //At the core of RxJS is the concept of Observables. An Observable is a representation of a stream of 
  //data or events that can be observed over time. Observables can emit multiple values asynchronously, 
  //and you can subscribe to them to react to those emissions.
  
  displayedColumns = ['name','category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService){
    //this.courses = []; //essa é uma alternativa para inicializar a variavel
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit():void {
    
  }

}
