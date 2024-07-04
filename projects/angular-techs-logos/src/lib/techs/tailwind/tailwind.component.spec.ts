import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindComponent } from './tailwind.component';

describe('TailwindComponent', () => {
  let component: TailwindComponent;
  let fixture: ComponentFixture<TailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailwindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
