import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellijComponent } from './intellij.component';

describe('IntellijComponent', () => {
  let component: IntellijComponent;
  let fixture: ComponentFixture<IntellijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntellijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
