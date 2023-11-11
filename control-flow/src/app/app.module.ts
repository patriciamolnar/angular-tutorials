import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfExampleComponent } from './views/if-example/if-example.component';
import { ForExampleComponent } from './views/for-example/for-example.component';
import { SwitchExampleComponent } from './views/switch-example/switch-example.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'if', component: IfExampleComponent },
  { path: 'for', component: ForExampleComponent },
  { path: 'switch', component: SwitchExampleComponent },
  { path: '', redirectTo: '/if', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    IfExampleComponent,
    ForExampleComponent,
    SwitchExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
