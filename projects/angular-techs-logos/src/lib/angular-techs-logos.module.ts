import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { amdIcon } from './techs/amd';

const icons = [
  { name: 'android', url: 'techs/android.svg' },
  { name: 'apple', url: 'techs/apple.svg' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [provideSvgIcons([amdIcon])],
  exports: []
})
export class AngularTechsLogosModule { }
