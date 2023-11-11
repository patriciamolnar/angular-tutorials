import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly navigationOptions = [
    { value: 'if', label: 'If Syntax Example' },
    { value: 'for', label: 'For Syntax Example' },
    { value: 'switch', label: 'Switch syntax Example' },
  ];
}
