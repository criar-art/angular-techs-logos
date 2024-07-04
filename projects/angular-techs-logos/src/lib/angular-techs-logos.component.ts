import { Component } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'lib-angular-techs-logos',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <p>
      angular-techs-logos works!
      <svg-icon key="amd"></svg-icon>
    </p>
  `,
  styles: ``
})
export class AngularTechsLogosComponent {

}
