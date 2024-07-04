import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorflowComponent } from './tensorflow.component';

describe('TensorflowComponent', () => {
  let component: TensorflowComponent;
  let fixture: ComponentFixture<TensorflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensorflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensorflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
