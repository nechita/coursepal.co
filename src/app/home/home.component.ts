import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BOXES } from '../shared/data/boxes.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  descriptionBox = {
    bgClass: 'bg-red-lightest',
    headline: 'Free Tools for aspiring online course instructors',
    description: 'Use our free generators to brainstorm your million dollar online course idea.',
  };

  boxes: Box[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.boxes = BOXES;
  }

  goTo(box: Box) {
    if (box.coming_soon) {
      return;
    }
    this.router.navigate([box.route]);
  }
}

export interface Box {
  bgClass: string;
  name: string;
  description: string;
  route: string;
  coming_soon: boolean;
}
