import { Component } from '@angular/core';
// import { SvgTestComponent } from '@app/techs/amd'
import { SvgTestComponent } from './techs/svg-test/svg-test.component'

@Component({
  selector: 'lib-angular-techs-logos',
  standalone: true,
  imports: [SvgTestComponent],
  templateUrl: './angular-techs-logos.component.html',
  styleUrl: './angular-techs-logos.component.scss'
})
export class AngularTechsLogosComponent {

}
