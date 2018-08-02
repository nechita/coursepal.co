import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

import { SeoService } from './seo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    RouterModule,
    SharedModule
  ],
  providers: [
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
