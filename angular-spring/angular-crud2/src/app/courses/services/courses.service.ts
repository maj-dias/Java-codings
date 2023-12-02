import { Injectable } from '@angular/core';
import {Course} from '../model/course'
import {HttpClient} from '@angular/common/http';
import {tap, take, delay, first} from 'rxjs/operators'; //RxJS, which stands for Reactive Extensions for JavaScript, 
//is a popular library for working with asynchronous and event-based programming in JavaScript and TypeScript. 

@Injectable({ //injeção de dependências
  providedIn: 'root' //
})

export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list()  { //list() is a method defined inside the CoursesService class
    return this.httpClient.get<Course[]>(this.API).pipe(
      take(1), //assim que o servidor me der uma resposta eu finalizo a subscrição de dados
      delay(50),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API, record).pipe(
      first()
    );
  }
}
