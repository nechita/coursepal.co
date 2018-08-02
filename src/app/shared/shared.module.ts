import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionBoxComponent } from './components/description-box/description-box.component';
import { BoxComponent } from './components/box/box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DescriptionBoxComponent,
    BoxComponent
  ],
  providers: [],
  exports: [
    DescriptionBoxComponent,
    BoxComponent
  ]
})
export class SharedModule { }
