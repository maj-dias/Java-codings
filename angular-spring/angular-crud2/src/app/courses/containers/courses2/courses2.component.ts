import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.scss']
})
export class Courses2Component {

  //por padrão no javascript, tudo é público, exceto explicitamente private
  //referência de variavel é sempre publico
  courses$: Observable<Course[]>;
  //At the core of RxJS is the concept of Observables. An Observable is a representation of a stream of 
  //data or events that can be observed over time. Observables can emit multiple values asynchronously, 
  //and you can subscribe to them to react to those emissions.
  //colocar $ no final é uma notação típica de observable


  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog:MatDialog,
    private router:Router,
    private route: ActivatedRoute
    ){
    //this.courses = []; //essa é uma alternativa para inicializar a variavel
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );

    //quem faz o tratamento de erros é o componente
  }

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'],{relativeTo: this.route})
  };

  ngOnInit():void {
    
  }

}
