import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
  <div class="box shadow rounded cursor-pointer">
  <div *ngIf="comingSoon" class="ribbon"><span>Coming soon</span></div>
    <div [class]="'shadow-lg rounded-sm w-full text-5xl p-8 box-content ' + bgClass">
      <h3 class="text-2xl text-blue-darker capitalize border-b-8 border-blue-darker pb-4 pt-4 box-tagline">{{name}}</h3>
    </div>
  </div>
  `,
  styleUrls: ['./box.component.scss']
})
export class BoxComponent {
  @Input()
  comingSoon: boolean;

  private _bgClass = '';
  private _name = '';

  @Input()
  set bgClass(bgClass: string) {
    this._bgClass = (bgClass && bgClass.trim()) || 'bg-red-light';
  }

  get bgClass(): string {
    return this._bgClass;
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name has been set>';
  }

  get name(): string {
    return this._name;
  }
}
