import { Component } from '@angular/core';
import { ideaResearch } from '../../../shared/data/boxes.data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-idea-research-checklist',
  template: `
    <description-box [bgClass]="box?.bgClass" [headline]="box?.name" [description]="box?.description"></description-box>
  `
})
export class CourseIdeaResearchChecklistComponent {
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
