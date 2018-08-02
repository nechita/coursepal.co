import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseLaunchChecklistComponent } from './containers/course-launch-checklist/course-launch-checklist.component';
import { courseLaunch } from '../shared/data/boxes.data';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path : '', component: CourseLaunchChecklistComponent, data: {...courseLaunch} }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    CourseLaunchChecklistComponent
  ],
  providers: []
})
export class CourseLaunchChecklistModule {}
