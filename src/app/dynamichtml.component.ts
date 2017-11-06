import { Component, Input } from '@angular/core';

@Component({
  template: `
    <div class="job-ad">
      <p [innerHTML]='data'> </p>
    </div>
  `
})
export class DynamicHtmlComponent {
  @Input() data: string;

}

