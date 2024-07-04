import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularTechsLogosModule } from 'angular-techs-logos';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularTechsLogosModule, AppHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-techs-logos';
}
