import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdComponent } from './amd.component';

describe('AmdComponent', () => {
  let component: AmdComponent;
  let fixture: ComponentFixture<AmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
