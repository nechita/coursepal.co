import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonsOptions } from '@ngx-share/core';

import { SharedModule } from '../shared/shared.module';

import { CourseNameGeneratorService } from './course-name-generator.service';

import { nameGenerator } from '../shared/data/boxes.data';

import { CourseNameGeneratorComponent } from './containers/course-name-generator/course-name-generator.component';
import { CourseNameGeneratorForm } from './components/course-name-generator-form/course-name-generator-form.component';


const ROUTES: Routes = [
  { path : '', component: CourseNameGeneratorComponent, data: {...nameGenerator} }
];

const SHARE_BUTTONS_CONFIG: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google'],
  theme: 'modern-light',
  gaTracking: true,
  twitterAccount: 'NechitaGabriel',
  title: 'Awesome Online Course Name Generator',
  description: 'Use our awesome generator to brainstorm names for your million dollar online course.'
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDnDModule,
    ShareButtonsModule.forRoot({options: SHARE_BUTTONS_CONFIG})
  ],
  declarations: [
    CourseNameGeneratorComponent,
    CourseNameGeneratorForm
  ],
  providers: [
    CourseNameGeneratorService
  ]
})
export class CourseNameGeneratorModule {}
