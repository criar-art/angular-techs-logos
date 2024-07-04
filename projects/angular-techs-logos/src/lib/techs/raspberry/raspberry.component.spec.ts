import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspberryComponent } from './raspberry.component';

describe('RaspberryComponent', () => {
  let component: RaspberryComponent;
  let fixture: ComponentFixture<RaspberryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaspberryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspberryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
