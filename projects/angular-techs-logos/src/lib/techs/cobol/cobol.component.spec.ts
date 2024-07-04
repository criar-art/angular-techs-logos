import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobolComponent } from './cobol.component';

describe('CobolComponent', () => {
  let component: CobolComponent;
  let fixture: ComponentFixture<CobolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
