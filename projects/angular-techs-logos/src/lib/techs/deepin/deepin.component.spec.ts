import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepinComponent } from './deepin.component';

describe('DeepinComponent', () => {
  let component: DeepinComponent;
  let fixture: ComponentFixture<DeepinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
