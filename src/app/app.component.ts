import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularTechsLogosModule } from 'angular-techs-logos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularTechsLogosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-techs-logos';
}
