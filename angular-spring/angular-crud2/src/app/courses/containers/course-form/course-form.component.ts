import { Component } from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    name:[''],
    category:['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit():void{
    this.form.value.name = '';
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(data => this.onSucess(), error=> {
      this.onError();
    });
  }

  onCancel(){
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar curso','',{duration:3000});
  }

  private onSucess(){
    this.snackBar.open('Curso salvo com sucesso','',{duration:3000});
    this.onCancel();
  }

}
