import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManjaroComponent } from './manjaro.component';

describe('ManjaroComponent', () => {
  let component: ManjaroComponent;
  let fixture: ComponentFixture<ManjaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManjaroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManjaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
