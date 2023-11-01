import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewPasswordIconComponent } from './components/view-password-icon/view-password-icon.component';
import { HidePasswordIconComponent } from './components/hide-password-icon/hide-password-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    ViewPasswordIconComponent,
    HidePasswordIconComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
