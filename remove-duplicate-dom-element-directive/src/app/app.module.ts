import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoveDuplicateDomElementDirective } from './remove-duplicate-dom-element.directive';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemoveDuplicateDomElementDirective,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
