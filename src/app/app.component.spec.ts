import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ModalinstallComponent } from './components/modal-install/modal-install.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AngularTechsLogosModule, AngularTechsLogosComponent } from 'angular-techs-logos';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppComponent,
        DarkmodeComponent,
        AppHeaderComponent,
        ModalinstallComponent,
        AngularTechsLogosModule,
        AppFooterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-darkmode component with hiddenLabel true', () => {
    const darkModeComponent = fixture.debugElement.query(By.directive(DarkmodeComponent));
    expect(darkModeComponent).toBeTruthy();
    expect(darkModeComponent.componentInstance.hiddenLabel).toBe(true);
  });

  it('should render app-header component', () => {
    const headerComponent = fixture.debugElement.query(By.directive(AppHeaderComponent));
    expect(headerComponent).toBeTruthy();
  });

  it('should render main with class main', () => {
    const mainElement = fixture.debugElement.query(By.css('main.main'));
    expect(mainElement).toBeTruthy();
  });

  it('should render app-modal-install component with correct properties', () => {
    component.isModalActive = true;
    fixture.detectChanges();
    const modalComponent = fixture.debugElement.query(By.directive(ModalinstallComponent));
    expect(modalComponent).toBeTruthy();
    expect(modalComponent.componentInstance.active).toBe(true);
  });

  it('should call openModal when button with class button-modal is clicked', () => {
    spyOn(component, 'openModal');
    const buttonElement = fixture.debugElement.query(By.css('.button-modal'));
    buttonElement.nativeElement.click();
    expect(component.openModal).toHaveBeenCalled();
  });

  it('should bind input value to searchSignal', () => {
    const inputElement = fixture.debugElement.query(By.css('input.input-search')).nativeElement as HTMLInputElement;
    inputElement.value = 'angular';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.searchSignal()).toBe('angular');
  });

  it('should render angular-techs-logos component with filtered techs', () => {
    component.techsFiltered = ['angular', 'react'];
    fixture.detectChanges();
    const logosComponent = fixture.debugElement.query(By.directive(AngularTechsLogosComponent));
    expect(logosComponent).toBeTruthy();
    expect(logosComponent.componentInstance.list).toEqual(['angular', 'react']);
  });

  it('should render not-found message when techsFiltered is empty', () => {
    component.techsFiltered = [];
    fixture.detectChanges();
    const notFoundElement = fixture.debugElement.query(By.css('.not-found'));
    expect(notFoundElement).toBeTruthy();
    const messageElement = notFoundElement.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('No logos found matching your search.');
  });

  it('should render correct codeString in code-wrapper element', () => {
    component.codeString = 'npm install angular-techs-logos';
    fixture.detectChanges();
    const codeWrapperElement = fixture.debugElement.query(By.css('.code-wrapper'));
    expect(codeWrapperElement.nativeElement.textContent.trim()).toBe('npm install angular-techs-logos');
  });
});
