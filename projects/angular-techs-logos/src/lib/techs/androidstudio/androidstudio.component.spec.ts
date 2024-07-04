import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidstudioComponent } from './androidstudio.component';

describe('AndroidstudioComponent', () => {
  let component: AndroidstudioComponent;
  let fixture: ComponentFixture<AndroidstudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidstudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
