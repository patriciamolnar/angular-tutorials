import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoveDuplicateDomElementDirective } from './remove-duplicate-dom-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    RemoveDuplicateDomElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
