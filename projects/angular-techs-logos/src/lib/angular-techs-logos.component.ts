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
  signal
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

  @ViewChild('iconContainer', { read: ViewContainerRef })
  iconContainer!: ViewContainerRef;

  techs: Tech[] = techs;
  listSignal = signal<string[] | undefined>([]);
  hiddenLogosSignal = signal<string[] | undefined>([]);
  techsList = signal<Tech[]>(this.techs);

  ngOnInit(): void {
    if (!this.name) {
      this.updateTechs();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list']) {
      this.listSignal.set(this.list);
    }
    if (changes['hiddenLogos']) {
      this.hiddenLogosSignal.set(this.hiddenLogos);
    }

    if (!this.name) {
      this.updateTechs();
    }
  }

  private updateTechs(): void {
    const currentList = this.listSignal();
    const currentHiddenLogos = this.hiddenLogosSignal();

    if (currentList) {
      this.techsList.set(this.getTechs(currentList));
    } else if (currentHiddenLogos && currentHiddenLogos.length > 0) {
      this.techsList.set(this.hiddenTechs(currentHiddenLogos));
    } else {
      this.techsList.set(this.techs);
    }
  }

  public techClass(name: string): string[] {
    const className = name?.toLowerCase() || '';
    return [this.class || '', className];
  }

  public getTech(name: string): Tech | undefined {
    return this.techs.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
  }

  private getTechs(items: string[]): Tech[] {
    return this.techs.filter((tech) => {
      if (typeof tech.name !== 'string') return false;
      return items.some((item) => {
        if (typeof item !== 'string') return false;
        return tech.name.toLowerCase() === item.toLowerCase();
      });
    });
  }

  private hiddenTechs(items: string[]): Tech[] {
    return this.techs.filter(
      (tech) => !items.includes(tech.name.toLowerCase())
    );
  }

  public getIcon(name: string): Type<any> | null {
    const tech = this.getTech(name);
    return tech ? tech.icon : null;
  }
}
