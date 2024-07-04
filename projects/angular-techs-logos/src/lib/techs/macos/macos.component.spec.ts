import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacosComponent } from './macos.component';

describe('MacosComponent', () => {
  let component: MacosComponent;
  let fixture: ComponentFixture<MacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
