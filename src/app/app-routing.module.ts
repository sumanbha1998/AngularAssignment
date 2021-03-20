import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourseComponent } from './list-course/list-course.component';
import { ApplyCourseComponent } from './apply-course/apply-course.component';

const routes: Routes = [
  {
    path: '',
    component: ListCourseComponent
  },
  {
    path: 'view',
    component: ListCourseComponent
  },
  {
    path: 'apply',
    component: ApplyCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
