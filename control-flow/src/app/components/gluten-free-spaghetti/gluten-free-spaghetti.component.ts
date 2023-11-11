import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pm-gluten-free-spaghetti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gluten-free-spaghetti.component.html',
  styleUrl: './gluten-free-spaghetti.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlutenFreeSpaghettiComponent {

}
