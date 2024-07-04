import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvidiaComponent } from './nvidia.component';

describe('NvidiaComponent', () => {
  let component: NvidiaComponent;
  let fixture: ComponentFixture<NvidiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvidiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
