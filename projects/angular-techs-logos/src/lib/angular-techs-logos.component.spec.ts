import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AngularTechsLogosComponent } from './angular-techs-logos.component';

import { AngularComponent } from './techs/angular/angular.component';
import { VueComponent } from './techs/vue/vue.component';
import { ReactComponent } from './techs/react/react.component';

import { Tech } from './techs/techs-data';

export const techs: Tech[] = [
  { name: 'Angular', icon: AngularComponent, url: 'https://angular.io' },
  { name: 'Vue', icon: VueComponent, url: 'https://vuejs.org' },
  { name: 'React', icon: ReactComponent, url: 'https://reactjs.org' },
];

describe('AngularTechsLogosComponent', () => {
  let component: AngularTechsLogosComponent;
  let fixture: ComponentFixture<AngularTechsLogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTechsLogosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularTechsLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a single tech logo when name is provided', () => {
    component.name = 'angular';
    fixture.detectChanges();
    const techContainer = fixture.debugElement.query(By.css('.tech-container'));
    expect(techContainer).toBeTruthy();
    expect(techContainer.nativeElement.style.width).toBe('100px');
    const figcaption = fixture.debugElement.query(By.css('figcaption'));
    expect(figcaption.nativeElement.textContent.trim()).toBe('Angular');
  });

  it('should render a list of tech logos when list is provided', () => {
    component.list = ['angular', 'react', 'vue'];
    spyOn(component, 'techsList').and.returnValue(techs);
    fixture.detectChanges();
    const techContainers = fixture.debugElement.queryAll(
      By.css('.tech-container')
    );
    expect(techContainers.length).toBe(3);
    expect(techContainers[0].nativeElement.style.width).toBe('100px');
    expect(techContainers[1].nativeElement.style.width).toBe('100px');
    expect(techContainers[2].nativeElement.style.width).toBe('100px');
    const figcaptions = fixture.debugElement.queryAll(By.css('figcaption'));
    expect(figcaptions[0].nativeElement.textContent.trim()).toBe('angular');
    expect(figcaptions[1].nativeElement.textContent.trim()).toBe('react');
    expect(figcaptions[2].nativeElement.textContent.trim()).toBe('vue');
  });

  it('should apply correct ngClass bindings', () => {
    component.name = 'angular';
    fixture.detectChanges();
    const techContainer = fixture.debugElement.query(By.css('.tech-container'));
    expect(techContainer.classes['angular']).toBeTrue();
  });

  it('should display the correct label when label is provided', () => {
    component.name = 'angular';
    component.label = 'AngularJS';
    fixture.detectChanges();
    const figcaption = fixture.debugElement.query(By.css('figcaption'));
    expect(figcaption.nativeElement.textContent.trim()).toBe('AngularJS');
  });

  it('should apply tooltip class when hiddenLabel is true', () => {
    component.name = 'angular';
    component.hiddenLabel = true;
    fixture.detectChanges();
    const figcaption = fixture.debugElement.query(By.css('figcaption'));
    expect(figcaption.classes['tooltip']).toBeTrue();
  });
});
