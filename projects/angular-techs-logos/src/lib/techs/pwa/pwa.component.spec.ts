import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaComponent } from './pwa.component';

describe('PwaComponent', () => {
  let component: PwaComponent;
  let fixture: ComponentFixture<PwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
