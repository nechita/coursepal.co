import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'About CoursePal.co',
      description: 'Everything you need to know about CoursePal.co',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '/about'
    });
  }

}
