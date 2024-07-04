import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpComponent } from './hp.component';

describe('HpComponent', () => {
  let component: HpComponent;
  let fixture: ComponentFixture<HpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
