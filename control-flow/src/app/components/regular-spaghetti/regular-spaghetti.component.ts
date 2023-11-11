import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-regular-spaghetti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-spaghetti.component.html',
  styleUrl: './regular-spaghetti.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegularSpaghettiComponent {

}
