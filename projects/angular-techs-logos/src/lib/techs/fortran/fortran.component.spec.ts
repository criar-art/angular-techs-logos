import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortranComponent } from './fortran.component';

describe('FortranComponent', () => {
  let component: FortranComponent;
  let fixture: ComponentFixture<FortranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
