import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoursePromotionChecklistComponent } from './containers/course-promotion-checklist/course-promotion-checklist.component';
import { coursePromotion } from '../shared/data/boxes.data';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path : '', component: CoursePromotionChecklistComponent, data: {...coursePromotion} }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    CoursePromotionChecklistComponent
  ],
  providers: []
})
export class CoursePromotionChecklistModule {}
