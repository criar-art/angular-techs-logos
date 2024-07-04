import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
  Type,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';

import { techs } from './techs/techs-data';

interface Tech {
  name: string;
  icon: Type<any>;
}

@Component({
  selector: 'angular-techs-logos',
  templateUrl: './angular-techs-logos.component.html',
  styleUrls: ['./angular-techs-logos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AngularTechsLogosComponent implements OnInit, OnChanges {
  @Input() list: string[] | undefined;
  @Input() name: string | undefined;
  @Input() size: string | undefined;
  @Input() label: string | undefined;
  @Input() hiddenLabel: boolean | undefined;
  @Input() class: string | undefined;
  @Input() hiddenLogos: string[] | undefined;

  @ViewChild('iconContainer', { read: ViewContainerRef }) iconContainer!: ViewContainerRef;

  techs: Tech[] = techs;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if(!this.name) {
      this.updateTechs();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list'] || changes['hiddenLogos']) {
      this.updateTechs();
    }
  }

  private updateTechs(): void {
    if (this.list) {
      this.techs = this.getTechs(this.list);
    } else if (this.hiddenLogos) {
      this.techs = this.hiddenTechs(this.hiddenLogos);
    } else {
      this.techs = this.techs;
    }

    console.log('this.techs: ', this.techs)
  }

  public techClass(name: string) {
    const className = name?.toLowerCase() || '';
    return [this.class || '', className];
  }

  public getTech(name: string): Tech | undefined {
    return this.techs.find(item => item.name.toLowerCase() === name.toLowerCase());
  }

  private getTechs(items: string[]): Tech[] {
    return this.techs.filter(tech => items.some(item => tech.name.toLowerCase() === item.toLowerCase()));
  }

  private hiddenTechs(items: string[]): Tech[] {
    return this.techs.filter(tech => !items.includes(tech.name.toLowerCase()));
  }

  public getIcon(name: string): Type<any> | null {
    console.log("getIcon name icon: ", name)
    const tech = this.getTech(name);
    return tech ? tech.icon : null;
  }
}
