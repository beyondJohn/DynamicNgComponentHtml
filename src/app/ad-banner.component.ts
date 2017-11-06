import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-banner',
  template: `
              <div class="ad-banner">
                <h3>Dynamic Component Templates Example</h3>
                <ng-template ad-host></ng-template>
              </div>
              <br />
              This content comes from the <b>app-add-banner</b> component
              <p [innerHTML]="myHTML"> </p>
              (The <b>app-add-component</b> is the parent of the [adhost] directive. The <b>app-add-component</b> passed the <b>[adhost] directive a template</b> )
            `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {

  @Input() ads: AdItem[];

  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private _http: Http) { }

  myUrl: string = '../assets/html1.html';

  ngAfterViewInit() {
    this.loadComponent(this.myUrl);
  }

  myHTML: string;
  loadComponent(url) {

    let getHtml = this._http.get(url).subscribe(

      data => {

        this.myHTML = data["_body"];

        let adItem = this.ads[0];

        let componentFactory = this.
          componentFactoryResolver.resolveComponentFactory(adItem.component);

        //this is reference to the [adhost] template 
        let viewContainerRef = this.adHost.viewContainerRef;

        //clear any data in [adhost] template(if any)
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);

        (<AdComponent>componentRef.instance).data = "This content comes from <b>[adhost]</b> directive<br />" 
        + this.myHTML
        + "<br />(<b>[adhost]</b> is a child of <b>app-add-banner</b> component)";

      }
      , error => alert(error)
      , () => console.log(Error));
  }

  ngOnDestroy() {

  }
}
