import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmberComponent } from './ember.component';

describe('EmberComponent', () => {
  let component: EmberComponent;
  let fixture: ComponentFixture<EmberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
