import { Injectable } from '@angular/core';
import {Course} from '../model/course'
import {HttpClient} from '@angular/common/http';
import {tap, take} from 'rxjs/operators'; //RxJS, which stands for Reactive Extensions for JavaScript, 
//is a popular library for working with asynchronous and event-based programming in JavaScript and TypeScript. 

@Injectable({ //injeção de dependências
  providedIn: 'root' //
})

export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  list()  { //list() is a method defined inside the CoursesService class
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1), //assim que o servidor me der uma resposta eu finalizo a subscrição de dados
      tap(courses => console.log(courses))
    );
  }
}
