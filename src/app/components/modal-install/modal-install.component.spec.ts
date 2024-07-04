import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ModalinstallComponent } from './modal-install.component';
import { By } from '@angular/platform-browser';

describe('ModalinstallComponent', () => {
  let component: ModalinstallComponent;
  let fixture: ComponentFixture<ModalinstallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalinstallComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalinstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have modal with active class when active is true', () => {
    component.active = true;
    fixture.detectChanges();
    const modalElement = fixture.debugElement.query(By.css('.modal'));
    expect(modalElement.nativeElement.classList.contains('active')).toBe(true);
  });

  it('should have modal without active class when active is false', () => {
    component.active = false;
    fixture.detectChanges();
    const modalElement = fixture.debugElement.query(By.css('.modal'));
    expect(modalElement.nativeElement.classList.contains('active')).toBe(false);
  });

  it('should call onCloseModal when close button is clicked', () => {
    spyOn(component, 'onCloseModal');
    const closeButton = fixture.debugElement.query(By.css('.modal-button'));
    closeButton.triggerEventHandler('click', null);
    expect(component.onCloseModal).toHaveBeenCalled();
  });

  it('should render modal content with expected headings and code examples', () => {
    const headings = fixture.debugElement.queryAll(By.css('.modal-content h2'));
    const codeExamples = fixture.debugElement.queryAll(By.css('.modal-content code.code-wrapper'));

    expect(headings.length).toBe(5); // Check if all expected headings are rendered
    expect(codeExamples.length).toBe(5); // Check if all expected code examples are rendered
  });

  it('should render correct code example content', () => {
    component.codeExample = 'npm install angular-techs-logos';
    fixture.detectChanges();
    const codeExampleElement = fixture.debugElement.query(By.css('.modal-content code.code-wrapper'));
    expect(codeExampleElement.nativeElement.textContent).toContain('npm install angular-techs-logos');
  });
});

