import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeComponent } from './chrome.component';

describe('ChromeComponent', () => {
  let component: ChromeComponent;
  let fixture: ComponentFixture<ChromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
