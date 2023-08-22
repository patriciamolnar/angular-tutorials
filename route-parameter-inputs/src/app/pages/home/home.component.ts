import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { nameData } from './home.static';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  names = nameData;

  getNameData() {
    return this.names.find(
      (name) => name.value.toLowerCase() === this.name.toLowerCase()
    );
  }
}
