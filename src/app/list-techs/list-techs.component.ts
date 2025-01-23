import { Component, effect, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NucleusBox } from 'nucleus-angular';
import {
  AngularTechsLogosModule,
  Tech,
  techs,
} from '../../../projects/angular-techs-logos/src/public-api';

@Component({
    selector: 'list-techs',
    imports: [AngularTechsLogosModule, FormsModule, NucleusBox],
    templateUrl: './list-techs.component.html',
    styleUrl: './list-techs.component.scss'
})
export class ListTechsComponent implements OnInit {
  techs: Tech[] = techs;
  techsFiltered: string[] = [];
  showRaw: boolean = false;
  hiddenLabel: boolean = false;
  searchSignal = signal<string>('');

  ngOnInit() {
    this.showRaw = JSON.parse(localStorage.getItem('showRaw') || 'false');
    this.hiddenLabel = JSON.parse(
      localStorage.getItem('hiddenLabel') || 'false'
    );
  }

  private getProperty(key: 'showRaw' | 'hiddenLabel'): boolean {
    return this[key];
  }

  onCheckboxChange(key: 'showRaw' | 'hiddenLabel') {
    localStorage.setItem(key, JSON.stringify(this.getProperty(key)));
  }

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
