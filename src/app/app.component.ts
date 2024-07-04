import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularTechsLogosModule } from 'angular-techs-logos';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularTechsLogosModule, AppHeaderComponent, DarkmodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  codeString: string = '<angular-techs-logos />';
}
