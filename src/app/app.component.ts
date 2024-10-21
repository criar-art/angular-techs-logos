import { Component } from '@angular/core';
import { NucleusAngularApp } from 'nucleus-angular';

import pkg from '../../package.json';
import pkgNPM from '../../projects/angular-techs-logos/package.json';
import { ExampleComponent } from './app.example';
import { ListTechsComponent } from './list-techs/list-techs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NucleusAngularApp, ListTechsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public appVersion;
  public angularVersion;
  public configNucleus: {
    name: string;
    github: string;
    npm: string;
    appVersion: string;
    angularVersion: string;
    stepsInstall: Array<{ name: string; language: string; content: string }>;
  };

  constructor() {
    this.appVersion = pkgNPM.version;
    this.angularVersion = pkg.dependencies?.['@angular/core'].replace('^', '');
    this.configNucleus = {
      name: 'angular-techs-logos',
      github: 'https://github.com/criar-art/angular-techs-logos',
      npm: 'https://www.npmjs.com/package/angular-techs-logos',
      appVersion: this.appVersion,
      angularVersion: this.angularVersion,
      stepsInstall: [
        {
          name: 'Install',
          language: 'bash',
          content: 'npm install angular-techs-logos',
        },
        {
          name: 'Usage',
          language: 'tsx',
          content: ExampleComponent,
        },
        {
          name: 'hiddenLabel',
          language: 'tsx',
          content: `<angular-techs-logos name="angular" [hiddenLabel]="true" />`,
        },
        {
          name: 'list',
          language: 'tsx',
          content: `<angular-techs-logos [list]="['vue', 'JavaScript', 'react', 'angular']" />`,
        },
        {
          name: 'hiddenLogos',
          language: 'tsx',
          content: `<angular-techs-logos [hiddenLogos]="['vue', 'javascript', 'react', 'angular', 'android']" />`,
        },
      ],
    };
  }
}
