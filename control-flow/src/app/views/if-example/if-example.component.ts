import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularSpaghettiComponent } from 'src/app/components/regular-spaghetti/regular-spaghetti.component';
import { GlutenFreeSpaghettiComponent } from 'src/app/components/gluten-free-spaghetti/gluten-free-spaghetti.component';
import { VegetarianSpaghettiComponent } from 'src/app/components/vegetarian-spaghetti/vegetarian-spaghetti.component';

@Component({
  selector: 'pm-if-example',
  standalone: true,
  imports: [
    CommonModule, 
    RegularSpaghettiComponent, 
    VegetarianSpaghettiComponent, 
    GlutenFreeSpaghettiComponent
  ],
  templateUrl: './if-example.component.html',
  styleUrl: './if-example.component.scss'
})
export class IfExampleComponent {
  readonly recipeOptions = [
    'regular', 'vegetarian', 'gluten-free'
  ];

  currentOption = this.recipeOptions[0];
}
