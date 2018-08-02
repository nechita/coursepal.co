import { Component } from '@angular/core';
import { SeoService } from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private seo: SeoService
  ) {

  }

  ngOnInit() {
    this.seo.generateTags({
      title: 'CoursePal.co - Free Tools For Online Creators',
      description: 'Use our free generators to brainstorm your million dollar online course idea.',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: ''
    });
  }
}
