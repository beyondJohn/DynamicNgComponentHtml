import { Component, OnInit } from '@angular/core';

import { AdItem }            from './ad-item';

import { DynamicHtmlComponent } from './dynamichtml.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-add-banner [ads]="ads"></app-add-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  
  ads: AdItem[];

  constructor() {}

  ngOnInit() {

    this.ads = [new AdItem(DynamicHtmlComponent)]
    
  }
}

