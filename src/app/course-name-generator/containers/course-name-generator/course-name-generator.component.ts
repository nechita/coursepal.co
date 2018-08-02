import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseNameGeneratorService, NameConfiguration, FinalName } from '../../course-name-generator.service';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'course-name-generator',
  templateUrl: './course-name-generator.component.html'
})
export class CourseNameGeneratorComponent {
  box;
  finalName: FinalName
  constructor(
    private route: ActivatedRoute,
    private generatorService: CourseNameGeneratorService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Online Course Name Generator - CoursePal.co',
      description: 'Brainstorm names for your online courses.',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '/course-name-generator'
    });
    this.route.data.subscribe((data) => {
      this.box = data;
    });
  }

  handleShuffleWord(event: {property, theme}) {
    const {property, theme} = event;
    const shuffledWord = this.generatorService.getShuffledWord(property, theme);
    this.finalName[property] = shuffledWord;
  }

  handleSubmit(event: NameConfiguration) {
    const result = this.generatorService.generateName(event);
    this.finalName = result;
  }

}
