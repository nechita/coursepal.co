import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CourseIdeaValidationChecklistComponent } from './containers/course-idea-validation-checklist/course-idea-validation-checklist.component';
import { ideaValidation } from '../shared/data/boxes.data';

const ROUTES: Routes = [
  { path : '', component: CourseIdeaValidationChecklistComponent, data: {...ideaValidation} }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    CourseIdeaValidationChecklistComponent
  ],
  providers: []
})
export class CourseIdeaValidationChecklistModule {}
