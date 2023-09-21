import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { Courses2Component } from './courses2/courses2.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Courses2Component
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule, //esse módulo centraliza as importações em uma única pasta: shared
    SharedModule
  ]
})
export class CoursesModule { }
