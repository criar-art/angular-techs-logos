import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboComponent } from './turbo.component';

describe('TurboComponent', () => {
  let component: TurboComponent;
  let fixture: ComponentFixture<TurboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
