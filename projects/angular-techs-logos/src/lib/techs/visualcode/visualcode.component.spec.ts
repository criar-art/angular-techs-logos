import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualcodeComponent } from './visualcode.component';

describe('VisualcodeComponent', () => {
  let component: VisualcodeComponent;
  let fixture: ComponentFixture<VisualcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
