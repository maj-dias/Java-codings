import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.scss']
})
export class Courses2Component {

  //por padrão no javascript, tudo é público, exceto explicitamente private
  //referência de variavel é sempre publico
  courses: Course[] = [
    {_id:'1', name:'Angular', category:'front-end'}
  ];
  displayedColumns = ['name','category'];

  constructor(){
    //this.courses = []; //essa é uma alternativa para inicializar a variavel
  }

}
