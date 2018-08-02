import { Component } from '@angular/core';
import { courseCreation } from '../../../shared/data/boxes.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-creation-checklist',
  template: `
    <description-box [bgClass]="box?.bgClass" [headline]="box?.name" [description]="box?.description"></description-box>
  `
})
export class CourseCreationChecklistComponent {
  box;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
    this.box = data;
    });
  }
}
