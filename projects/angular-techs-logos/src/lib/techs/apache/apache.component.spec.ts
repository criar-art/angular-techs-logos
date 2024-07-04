import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApacheComponent } from './apache.component';

describe('ApacheComponent', () => {
  let component: ApacheComponent;
  let fixture: ComponentFixture<ApacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
