import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Courses2Component } from './courses2/courses2.component';

const routes: Routes = [
  {path: '', component: Courses2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
