import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { courseCreation } from '@app-shared/data/boxes.data';

import { CourseCreationChecklistComponent } from './containers/course-creation-checklist/course-creation-checklist.component';
import { SharedModule } from '@app-shared/shared.module';

const ROUTES: Routes = [
  { path : '', component: CourseCreationChecklistComponent, data: { ...courseCreation }  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    CourseCreationChecklistComponent
  ],
  providers: []
})
export class CourseCreationChecklistModule {}
