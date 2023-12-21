import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFormComponent } from './containers/course-form/course-form.component';
import { Courses2Component } from './containers/courses2/courses2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


@NgModule({
  declarations: [
    Courses2Component,
    CourseFormComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CoursesModule { }