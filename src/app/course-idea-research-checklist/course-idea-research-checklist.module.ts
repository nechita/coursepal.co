import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseIdeaResearchChecklistComponent } from './containers/course-idea-research-checklist/course-idea-research-checklist.component';
import { ideaResearch } from '../shared/data/boxes.data';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path : '', component: CourseIdeaResearchChecklistComponent, data: {...ideaResearch} }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    CourseIdeaResearchChecklistComponent
  ],
  providers: []
})
export class CourseIdeaResearchChecklistModule {}
