import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Courses2Component } from './containers/courses2/courses2.component';
import { CourseFormComponent } from './containers/course-form/course-form.component';

const routes: Routes = [
  { path: '', component: Courses2Component },
  { path: 'new', component: CourseFormComponent },
  { path: 'edit/:id', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }