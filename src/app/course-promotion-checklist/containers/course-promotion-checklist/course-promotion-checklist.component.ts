import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-promotion-checklist',
  template: `
    <description-box [bgClass]="box?.bgClass" [headline]="box?.name" [description]="box?.description"></description-box>
  `
})
export class CoursePromotionChecklistComponent {
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
