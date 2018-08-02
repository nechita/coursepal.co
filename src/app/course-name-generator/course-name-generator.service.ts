import { Injectable } from '@angular/core';

@Injectable()
export class CourseNameGeneratorService {
  constructor() { }

  private getRandomItem(list: any[], exception?: string) {
    return list[Math.floor(Math.random() * list.length)]
  }

  private startsWithVowel(word: string) {
    if (!word) return false;
    const lowercasedWord = word.toLowerCase();
    return lowercasedWord.startsWith('a') || lowercasedWord.startsWith('e') || lowercasedWord.startsWith('i') || lowercasedWord.startsWith('o') || lowercasedWord.startsWith('u') ? true : false;
  }

  generateName(obj: NameConfiguration) {
    let result: FinalName = {
      article: '',
      theme: '',
      adjective: '',
      aspirational: '',
      format: ''
    }
    if (obj.articles) {
      const properArticles = ["The", "An"];
      result.article = this.startsWithVowel(obj.theme) ? this.getRandomItem(properArticles) : this.getRandomItem(ARTICLES);
    }
    if (obj.enhancers.adjectives) {
      result.adjective = this.getRandomItem(ADJECTIVES);
    }
    result.theme = obj.theme;
    if (obj.enhancers.aspirationals) {
      result.aspirational = this.getRandomItem(ASPIRATIONALS);
    }
    if (obj.enhancers.formats) {
      result.format = this.getRandomItem(FORMATS);
    }
    return result;
  }

  getShuffledWord(property: string, theme?: string) {
    switch (property) {
      case 'article':
        const properArticles = ["The", "An"];
        return this.startsWithVowel(theme) ? this.getRandomItem(properArticles) : this.getRandomItem(ARTICLES);
      case 'adjective':
        return this.getRandomItem(ADJECTIVES);
      case 'aspirational':
        return this.getRandomItem(ASPIRATIONALS);
      case 'format':
        return this.getRandomItem(FORMATS);
    }
  }
}

export const ARTICLES = [
  "The",
  "A"
]
export const ADJECTIVES = [
  "Mastering",
  "Modern",
  "Incredible",
  "Certified",
  "Advanced",
  "Complete",
  "Accelerated",
  "Complete",
  "Introduction (to)",
  "Complete Introduction (to)",
  "Ultimate",
  "Practical",
  "Hands on",
  "Learn and Understand"
];

export const FORMATS = [
  "Course",
  "Bootcamp",
  "Masterclass",
  "Guide",
  "From A to Z",
  "School",
  "Certification",
  "Programme",
  "The Practical Guide",
  "Prep Seminar",
  "From Beginner to Advanced",
  "From Beginner to Professional",
  "From Beginner to Expert",
  "From Zero to Hero",
];

export const ASPIRATIONALS = [
  "Mastery",
  "Ninja",
  "Practitioner",
  "Like a Pro"
];

export interface NameConfiguration {
  theme: string,
  enhancers: {
    adjectives: boolean,
    aspirationals: boolean,
    formats: boolean
  },
  articles: boolean
}

export interface FinalName {
  article?: string,
  theme: string,
  adjective?: string,
  aspirational?: string,
  format?: string
}
