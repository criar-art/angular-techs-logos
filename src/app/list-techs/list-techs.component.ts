import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularTechsLogosModule, Tech, techs } from '../../../projects/angular-techs-logos/src/public-api';

@Component({
  selector: 'list-techs',
  standalone: true,
  imports: [AngularTechsLogosModule, FormsModule],
  templateUrl: './list-techs.component.html',
  styleUrl: './list-techs.component.scss'
})
export class ListTechsComponent {
  techs: Tech[] = techs;
  techsFiltered: string[] = [];
  searchSignal = signal<string>('');

  techsFilteredEffect = effect(() => {
    this.techsFiltered = this.techs
      .filter((item) => {
        if (typeof item.name === 'string') {
          const nameItem = item.name.toLowerCase();
          return nameItem.includes(this.searchSignal().trim().toLowerCase());
        }
        return false; // Ignore items without a valid name
      })
      .map((item) => item.name);
  });

  onSearchChange(event: Event): void {
    if (event.target) {
      this.searchSignal.set((event.target as HTMLInputElement).value);
    }
  }
}
