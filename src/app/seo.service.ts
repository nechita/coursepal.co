import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(
    private meta: Meta
  ) { }

  generateTags(config) {
    config = {
      title: 'CoursePal.co - Free Tools For Online Creators',
      description: 'Use our free generators to brainstorm your million dollar online course idea.',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@NechitaGabriel' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'CoursePal.co' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://instafire-app.firebaseapp.com/${config.slug}` });
  }

}
