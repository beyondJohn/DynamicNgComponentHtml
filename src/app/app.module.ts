import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { DynamicHtmlComponent }   from './dynamichtml.component';
import { AdBannerComponent }    from './ad-banner.component';
import { AdDirective }          from './ad.directive';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule,
  HttpModule ],
  providers: [],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  DynamicHtmlComponent,
                  AdDirective ],
  entryComponents: [ DynamicHtmlComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

