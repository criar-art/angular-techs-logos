import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitestComponent } from './vitest.component';

describe('VitestComponent', () => {
  let component: VitestComponent;
  let fixture: ComponentFixture<VitestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
