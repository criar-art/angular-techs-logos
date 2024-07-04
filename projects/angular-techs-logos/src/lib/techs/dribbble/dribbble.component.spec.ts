import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DribbbleComponent } from './dribbble.component';

describe('DribbbleComponent', () => {
  let component: DribbbleComponent;
  let fixture: ComponentFixture<DribbbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DribbbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DribbbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
