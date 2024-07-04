import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XcodeComponent } from './xcode.component';

describe('XcodeComponent', () => {
  let component: XcodeComponent;
  let fixture: ComponentFixture<XcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
