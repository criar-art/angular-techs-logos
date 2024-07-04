import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylusComponent } from './stylus.component';

describe('StylusComponent', () => {
  let component: StylusComponent;
  let fixture: ComponentFixture<StylusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
