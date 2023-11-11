import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-vegetarian-spaghetti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetarian-spaghetti.component.html',
  styleUrl: './vegetarian-spaghetti.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VegetarianSpaghettiComponent {

}
