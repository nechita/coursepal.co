import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="container max-w-md mx-auto">
        <div class="logo">
          <h1 class="font-black capitalize text-center">
            <a class="no-underline text-md tracking-wide text-blue-darker" href="">
              <img src="/assets/images/course_pal.svg" alt="" height="64px" width="auto">
              <br>
              <span class="text-2xl font-extrabold mb-8 block">Course Pal</span>
            </a>
          </h1>
        </div>
    </div>
  `
})
export class NavComponent {
  constructor() {}
}
