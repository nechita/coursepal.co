import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'course-creation-checklist', loadChildren: "./course-creation-checklist/course-creation-checklist.module#CourseCreationChecklistModule" },
  { path: 'course-idea-research-checklist', loadChildren: "./course-idea-research-checklist/course-idea-research-checklist.module#CourseIdeaResearchChecklistModule" },
  { path: 'course-idea-validation-checklist', loadChildren: "./course-idea-validation-checklist/course-idea-validation-checklist.module#CourseIdeaValidationChecklistModule" },
  { path: 'course-launch-checklist', loadChildren: "./course-launch-checklist/course-launch-checklist.module#CourseLaunchChecklistModule" },
  { path: 'course-promotion-checklist', loadChildren: "./course-promotion-checklist/course-promotion-checklist.module#CoursePromotionChecklistModule" },
  { path: 'course-name-generator', loadChildren: "./course-name-generator/course-name-generator.module#CourseNameGeneratorModule" },

	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
