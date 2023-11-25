import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Courses2Component } from './courses2/courses2.component';
import { CourseFormComponent } from './course-form/course-form.component';

const routes: Routes = [
  { path: '', component: Courses2Component },
  { path: 'new', component: CourseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }