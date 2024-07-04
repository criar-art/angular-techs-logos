import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustComponent } from './rust.component';

describe('RustComponent', () => {
  let component: RustComponent;
  let fixture: ComponentFixture<RustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
