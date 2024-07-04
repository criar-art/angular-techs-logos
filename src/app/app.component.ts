import { Component, Renderer2, Type, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularTechsLogosModule, techs } from 'angular-techs-logos';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ModalinstallComponent } from './components/modal-install/modal-install.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FormsModule } from '@angular/forms';

interface Tech {
  name: string;
  icon: Type<any>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    AngularTechsLogosModule,
    AppHeaderComponent,
    ModalinstallComponent,
    DarkmodeComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  codeString: string = '<angular-techs-logos />';
  isModalActive: boolean = false;
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

  openModal(): void {
    this.isModalActive = true;
    this.renderer.addClass(document.body, 'modal-active');
  }

  closeModal(): void {
    this.isModalActive = false;
    this.renderer.removeClass(document.body, 'modal-active');
  }
}
