import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { Courses2Component } from './courses2/courses2.component';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [
    Courses2Component
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule
  ]
})
export class CoursesModule { }
