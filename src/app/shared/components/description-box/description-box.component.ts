import { Component, Input } from '@angular/core';

@Component({
  selector: 'description-box',
  template: `
    <div class="container max-w-md mx-auto mt-8">
      <div [class]="'shadow-lg rounded-sm w-full text-5xl p-8 cta ' + bgClass">
        <h2 class="cta-tagline no-border text-2xl text-blue-darker capitalize border-b-8 border-blue-darker pb-4 pt-4">{{headline}}</h2>
        <h4 class="text-sm font-light">{{description}}</h4>
          <ng-content></ng-content>
      </div>
    </div>
  `
})
export class DescriptionBoxComponent {
  private _bgClass = '';
  private _headline = '';
  private _description = '';

  @Input()
  set bgClass(bgClass: string) {
    this._bgClass = (bgClass && bgClass.trim()) || ' bg-red-lightest';
  }

  get bgClass(): string {
    return this._bgClass;
  }

  @Input()
  set headline(headline: string) {
    this._headline = (headline && headline.trim()) || '<no headline has been set>';
  }

  get headline(): string {
    return this._headline;
  }

  @Input()
  set description(description: string) {
    this._description = (description && description.trim()) || '<no description has been set>';
  }

  get description(): string {
    return this._description;
  }
}
